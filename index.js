
var EventEmitter = require('events');


function clonify(obj) {
    if ( typeof obj === "object" ) {
        var cv = JSON.parse(JSON.toString(obj))
        return(cv);
    } else {
        return(obj)
    }
}


module.exports.pNode = class pNode {

    // nodeType - source, exit, internal
    //

    constructor(id,nodeType)  {

        this.id = id;
        this.type = nodeType;
        if ( this.type === undefined ) {
            this.type = "internal"
        }

        this.contraints = undefined;  // descendents may
        this.exitCallBack = undefined;

        this.resource = 0;  // default is a count
    }


    identity() {
        return(this.id)
    }

    hasResource() {
        return(this.count() > 0);
    }

    forward(value) {

        var v = clonify(value);

        if ( this.contraints !== undefined ) {
            if ( !(this.contraints(v)) ) return(false)
        }

        if ( this.type === "exit" ) {
            if ( this.exitCallBack ) {
                this.exitCallBack(v);
            }
        } else {
            this.addResource(v);
        }

        return(true);
    }

    setExitCB(cb) {
        this.exitCallBack = cb;
    }


    // overrides start here....

    reportObject() {
        return([this.id,this.resource])
    }

    count() {
        return(this.resource)
    }

    addResource(value) {
        this.resource += parseInt(value);  // default is to add how many
    }

    consume() {
        this.resource -= 1;
        return(1);
    }

}



class pTransition {

    constructor(label)  {
        //
        this.preNodes = [];
        this.postNodes = [];
        this.nodeLookup = {};

        this.resourceGroup = [];
        //
        this.label = label;

        this.reducer = (accumulator, currentValue) => accumulator + currentValue; // default
        this.initAccumulator = 0;  /// default
        this.forwardValue = 0; // default;

    }

    addPostNode(pnode) {
        //
        if ( this.nodeLookup[pnode.identity()] == undefined ) {
            this.nodeLookup[pnode.identity()] = pnode;
            //
            this.postNodes.push(pnode);
        } else {
            throw new Exception("Adding node to post transition twice.")
        }
    }

    addPreNode(pnode) {
        //
        if ( this.nodeLookup[pnode.identity()] == undefined ) {
            this.nodeLookup[pnode.identity()] = pnode;
            //
            this.preNodes.push(pnode);
        } else {
            throw new Exception("Adding node to post transition twice.")
        }
    }

    all_preNodes_active() {
        var all_ready = this.preNodes.every(pnode => {
                                                return(pnode.hasResource());
                                            })
        return(all_ready);
    }

    consume_preNode_resources() {
        this.resourceGroup = this.preNodes.map(pnode => { return(pnode.consume()); } );
        this.forwardValue = this.resourceGroup.reduce(this.reducer,this.initAccumulator);
    }

    output_resource_to_postNodes() {
        this.postNodes.forEach(pnode => {
                                   pnode.forward(this.forwardValue);
                               });
    }

    setSpecialReduction(reducer,initAccumulator) {
        this.reducer = reducer; // default
        this.initAccumulator = initAccumulator;  /// default
    }

}


module.exports.RunPetri = class RunPetri extends EventEmitter {

    constructor() {

        super();

        this.nodes = {};
        this.transitions = [];

        this.sourceNodes = {};
        this.exitNodes = {};

    }


    setNetworkFromJson(net_def,dataExitCb,nodeClasses) {
        var nodes = net_def.nodes.map(nodeDef => {

                                          var id = nodeDef.id;
                                          var type = nodeDef.type;

                                          if ( type === "source" ) {
                                              pNet.on(id,pNet.reactor(id));
                                          }

                                          if ( nodeDef.class ) {
                                              var nodeClass = nodeClasses[nodeDef.class];
                                              return(new nodeClass(id,type));
                                          } else {
                                              return(new pNode(id,type));
                                          }

                                      });

        this.loadGraph(nodes,net_def.transitions,dataExitCb);
    }



    loadGraph(nodes,transitions,cbGen) {

        if ( nodes === undefined ) { throw new Exception("no nodes specified"); }
        if ( transitions === undefined ) { throw new Exception("no transitions specified"); }
        if ( cbGen === undefined ) { throw new Exception("no node callback generator specified"); }

        this.nodes = {};
        this.sourceNodes = {};
        this.exitNodes = {};

        nodes.forEach(pnode => {
                          this.nodes[pnode.identity()] = pnode;  // add it in
                          //source, exit, internal
                          if ( pnode.type === "source" ) {
                              this.sourceNodes[pnode.identity()] = pnode;
                          }
                          if ( pnode.type === "exit" ) {
                              this.exitNodes[pnode.identity()] = pnode;
                              if ( pnode.exitCallBack === undefined ) {
                                this.setExitCB(pnode.identity(),cbGen(pnode.identity()))
                              }
                          }
                     })

        this.transitions = transitions.map(transDef => {

                                               var trans = new pTransition(transDef.label);
                                               transDef.inputs.forEach(input => {
                                                                           var nn = this.nodes[input];
                                                                           trans.addPreNode(nn);
                                                                       })

                                               transDef.outputs.forEach(output => {
                                                                            var nn = this.nodes[output];
                                                                            trans.addPostNode(nn);
                                                                        })

                                               if ( transDef.reduction ) {
                                                   if ( transDef.reduction.reducer && transDef.reduction.initAccumulator ) {
                                                       trans.setSpecialReduction(transDef.reduction.reducer,transDef.reduction.initAccumulator);
                                                   }
                                               }

                                               return(trans);
                            })
    }



    setExitCB(nodeName,cb) {
        //
        if ( typeof cb != "function" ) {
            throw(new Error(nodeName + " exit value call back is not a function."))
        }
        //
        if ( this.exitNodes[nodeName] === undefined ) {
            throw(new Error(nodeName + " Exit value call back cannot be set for non exiting node."))
        }
        //
        this.exitNodes[nodeName].setExitCB(cb);
    }

    /*
      pnet.on("level-sensor1", this.reactor("level-sensor1") );

      pnet.emit( "level-sensor1", "0.5" );
    */

    reactor(sourceName) {
        return((value) => {
                   if ( this.sourceNodes[sourceName] ) {
                       var pnode = this.sourceNodes[sourceName];
                       pnode.forward(value);
                   }
               })
    }

    step() {
        this.transitions.forEach(trans => {
                                     if ( trans.all_preNodes_active() ) {
                                         trans.consume_preNode_resources();
                                         trans.output_resource_to_postNodes();
                                     }
                                 })
    }


    report() {
        var reportObj = {};

        for ( var nid in this.nodes ) {
            reportObj[nid] = this.nodes[nid].reportObject();
        }

        return(reportObj);
    }

}







