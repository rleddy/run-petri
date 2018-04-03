
var EventEmitter = require('events');


/*
  run-petri-async

    What differs from run-petri is the absence of a step method.

    All action moves foward based on the cascade of states and the readiness of transitions.
    Confusions will be handled by cloning tokens that then follow splits into downstream transitions.
    Hence the forwarding of the resource is treated as a broadcast.

    In node.js this split forwarding is done simply by emiting an event, which is sent to all listeners.
    So, during initialization the event listener lists are established by processing the configuration,
    which includes the net definition.


    Capturing the state of the petri net for display becomes a little more difficult, since a simple report of the net
    state won't be able to be seen. Events will go by too quickly for the messages to be sent to browsers for state displays.
    So, a State Trace Sink, may be introduced. The sink waits for events from the Petri nodes (places).
    The Trace Sink looks for a "place-trace" event, which has the as parameters the id of the state, the value updating the place,
    and the time in UNIX epoch milliseconds.


    //----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

    This index is the entire code of the run-petri model.

    Three classes are defined and two of them are exposed to the node.js requirment system.

    the three classes are
    1) pNode - the Petri net node. These are usually seen as circles in the diagrams - the operate as resource holders
    2) pTransition - the Petri net transition - These are the active parts of the net, usually seen as vertical lines in the diagrams.
    3) RunPetri - the is the manager of the net. This takes in the net definition object, and operates when the 'step' method is called.

    The classes that are exposed are 1) pNode and 2) RunPetri.
    The pNode class is exposed in order to allow for derived classes for applications needing more than counts.
    The RunPetri class is not expressly intended for override, although it is possible. RunPetri works with a
    general notion of a pNode class or descendenat as do the transition objects.
    So, customization may be best done just working with the pNode class.

    The RunPetri processing expects that there will be three identifiable kinds of pNodes on any level of specialization.
    The node types, indicated by a type field, are 1) input nodes, 2) internal nodes, and 3) output nodes.

    Applications specifying instances of these kinds of nodes provide a means for transitions to identify them as upstream and downstreams
    nodes that the transitions can move resources from and to. Input nodes, have no upstream transitions, and outpus are terminals to the
    directed acyclic flow.

    Applications can provide callback functions to the output nodes in order to handle emitting values, data, or simple event triggers.
    The pNodes do not have to be overriden in order to determine an output operations. A callback should be provided.

    In the case where tokens moving through the net have scalar values or have structure, the pNode can be overridden to keep track of the
    values. A recommendation: move references in small objects that are treated as resources.

*/


function clonify(obj) {
    if ( typeof obj === "object" ) {
        var cv = JSON.parse(JSON.toString(obj))
        return(cv);
    } else {
        return(obj)
    }
}






// pNode - Basic pNode behavior.
//
// The pNode is mostly an accessed object.
// A pNode virtually contains a token when it has a resource or resources.
//
// In the basic case, a pNode has a resource if it has a count of tokens.
//
//  The following methods would be overridden to specialize pNode behavior.
//
//  reportObject
//  count
//  addResource
//  consume
//
//  The pNode method forward, is call when a transition moves resources from the pNode on to another.
//  The transition calls 'consume' on one pNode and then calls forward for downstream pNodes with a value constructed from
//  the results of reducing the consumed resources. (This is a very localised version of map-reduce.
//
//  If a pNode has a contraint checking method (determined by descendant classes) the contraint check will have to be passed
//  before 'forward' can operate.  After this check, the type of the pNode will be important.
//  If the pNode is an output and there is an exit node callback, the callback will be called.
//  Otherwise, the resource value is added be a call to addResource.
//
//  ------ ------  ------ ------




class pNode extends EventEmitter {

    // nodeType - source, exit, internal
    //

    constructor(id,nodeType,target)  {

        super();

        this.id = id;
        this.type = nodeType;
        if ( this.type === undefined ) {
            this.type = "internal"
        }

        this.contraints = undefined;  // descendents may
        this.exitCallBack = undefined;

        this.inhibits = false;
        if ( nodeType == "inhibit" ) {
            this.inhibits = target;
        }

        this.resource = 0;  // default is a count

        this.transitions = [];

        this.traceSink = null;
    }

    // if the trace sink is set, it will be used to tell a log manager
    // that it has been visited at a particular point in time.

    setTraceSink(sink) {
        this.traceSink = sink;
    }

    trace(value) {
        this.traceSink.emit("place-trace",this.id,value,Date.now());
    }


    identity() {
        return(this.id)
    }

    hasResource(label) {
        var marked = (this.count() > 0);
        if ( this.inhibits ) {
            if ( this.inhibits == label ) return(!marked)
        }
        return(marked);
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


    addTransition(trans) {
        this.transitions.push(trans);
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
        this.transitions.forEach( t => {
                                     t.emit(this.id,value, this, this.resource);
                                     if ( this.traceSink ) {  // for visualization...
                                         this.trace(value);
                                     }
                                 })
    }

    consume() {
        this.resource -= 1;
        return(1);
    }

}



module.exports.pNode = pNode;



//
// pTransition -
//
//


class pTransition extends EventEmitter {

    constructor(label)  {

        super()
        //
        this.preNodes = [];
        this.postNodes = [];
        this.nodeLookup = {};
        this.nodeEnableCheck = {};

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
            pnode.addTransition(this);
            this.on(pnode.identity(),(value,node,qty) => {
                        this.nodeEnableCheck[node.identity()] = node.consume(qty);
                        if ( this.matchInputs() ) {
                            this.consume_preNode_resources();
                            this.output_resource_to_postNodes();
                        }
                    })
        } else {
            throw new Exception("Adding node to post transition twice.")
        }
    }

    // The transition will be invoked only if it is enabled.
    // it is enabled if all prenodes have resource and do not
    // inhibit this node.
    all_preNodes_active() {
        var all_ready = this.preNodes.every(pnode => {
                                                return(pnode.hasResource(this.label));
                                            })
        return(all_ready);
    }


    matchInputs() {
        return(true)
    }

    consume_preNode_resources() {
        this.resourceGroup = Object.keys(this.nodeEnableCheck).map( key => { return(this.nodeEnableCheck[key]); } );
        this.forwardValue = this.resourceGroup.reduce(this.reducer,this.initAccumulator);
    }

    output_resource_to_postNodes() {
        this.postNodes.forEach(pnode => {
                                   pnode.emit("transition",this.forwardValue);
                               });
    }

    setSpecialReduction(reducer,initAccumulator) {
        this.reducer = reducer; // default
        this.initAccumulator = initAccumulator;  /// default
    }

}





// RunPetri
//
//  This is the operation container for a single Petr net instance.


module.exports.RunPetri = class RunPetri extends EventEmitter {

    constructor() {

        super();

        this.nodes = {};
        this.transitions = [];

        this.sourceNodes = {};
        this.exitNodes = {};

    }

    setNetworkFromJson(net_def,cbGen,nodeClasses) {
        var nodes = net_def.nodes.map(nodeDef => {

                                          var id = nodeDef.id;
                                          var type = nodeDef.type;

                                          if ( type === "source" ) {
                                              this.on(id,this.reactor(id));
                                          }

                                          var target = undefined;
                                          if ( nodeDef.transition ) {
                                              target = nodeDef.transition;
                                          }

                                          if ( nodeDef.class && nodeClasses ) {
                                              var nodeClass = nodeClasses[nodeDef.class];
                                              return(new nodeClass(id,type,target));
                                          } else {
                                              return(new pNode(id,type,target));
                                          }

                                      });

        this.loadGraph(nodes,net_def.transitions,cbGen);
    }



    loadGraph(nodes,transitions,cbGen) {

        if ( nodes === undefined ) { throw new Exception("no nodes specified"); }
        if ( transitions === undefined ) { throw new Exception("no transitions specified"); }
        if ( cbGen === undefined ) { throw new Exception("no node callback generator specified"); }

        this.nodes = {};
        this.sourceNodes = {};
        this.exitNodes = {};

        this.claimed = {};

        nodes.forEach(pnode => {
                          this.nodes[pnode.identity()] = pnode;  // add it in
                          //source, exit, internal
                          if ( pnode.type === "source" ) {
                              this.sourceNodes[pnode.identity()] = pnode;
                          }
                          if ( pnode.type === "exit" ) {
                              this.exitNodes[pnode.identity()] = pnode;
                              if ( pnode.exitCallBack === undefined ) {
                                this.setExitCB(pnode.identity(),cbGen(pnode.identity(),'exit'))
                              }
                          }
                     });



        this.transitions = transitions.map(transDef => {

                                               var trans = new pTransition(transDef.label);
                                               transDef.inputs.forEach(input => {
                                                                           var nn = this.nodes[input];

                                                                           if ( this.claimed[input] && (nn.inhibits != transDef.label) ) {
                                                                               throw new Error(`${input} used more than once in transitions''`)
                                                                           } else if (nn.inhibits != transDef.label) {
                                                                               this.claimed[input] = true;
                                                                           }

                                                                           trans.addPreNode(nn);
                                                                    })

                                               transDef.outputs.forEach(output => {
                                                                            var nn = this.nodes[output];
                                                                            trans.addPostNode(nn);
                                                                            nn.on("transition", (reduction) => {
                                                                                      nn.forward(reduction);
                                                                                  });
                                                                        })

                                               if ( transDef.reduction ) {
                                                   if ( transDef.reduction.reducer && transDef.reduction.initAccumulator ) {
                                                       var reduct = cbGen(transDef.reduction.reducer,'reduce')
                                                       trans.setSpecialReduction(reduct,transDef.reduction.initAccumulator);
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


    reactor(sourceName) {
        return((value) => {
                   if ( this.sourceNodes[sourceName] ) {
                       var pnode = this.sourceNodes[sourceName];
                       pnode.forward(value);
                   }
               })
    }


    setTraceSink(sink) {
        for ( var k in this.nodeLookup ) {
            var nn = this.nodeLookup[k];
            nn.setTraceSink(sink);
        }
    }

}







