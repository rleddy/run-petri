var PetriClasses = require('./index.js');
var pNode = PetriClasses.pNode;
var RunPetri = PetriClasses.RunPetri;



const nodeClasses = { pNode };

const fs = require('fs');



const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'petri> '
});

/*

import ClassOne from './ClassOne';
import ClassTwo from './ClassTwo';

const classes = { ClassOne, ClassTwo };

export default function dynamicClass (name) {
  return classes[name];
}

import dynamicClass from './dynamicClass'

const ClassOne = dynamicClass('ClassOne') // Get the ClassOne class

new ClassOne(args) // Create an instance of ClassOne

*/



var pNet = new RunPetri();



rl.prompt();

rl.on('line', (line) => {

          var dline = line.trim();
          var dataArray = dline.split(' ');

          switch ( dataArray[0] ) {

              case 'exit':
              case 'bye':
              case 'quit': {
                  process.exit(0);
                  break;
              }


              case 'load' : {

                  var filename = dataArray[1];

                  try {

                      var jsonData = fs.readFileSync(filename,'ascii').toString();
                      var net_def = JSON.parse(jsonData);


                      var dataExitCb = (v) => { console.log("EMIT: " + nodeId + ": " + v) }
                      pNet.setNetworkFromJson(net_def,dataExitCb,nodeClasses);

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


                  } catch ( e ) {
                      console.dir(e,{ depth: null, colors: true })
                      console.log("continue");
                  }

                  console.log("loaded...")

                  break;
              }

              case "send" : {
                  //
                  dataArray.shift();
                  var sourceNode = dataArray.shift();
                  var value = dataArray.join(' ').trim();
                  pNet.emit(sourceNode,value);
                  console.log("<")
                  //
                  break;
              }


              case "step" : {
                  pNet.step();
                  console.log("<")
                  break;
              }

              case "report" : {
                  console.dir(pNet.report())
                  console.log("<")
                  break;
              }


              default: {
                  console.log("Did not recognize: " + dataArray[0]);
              }
          }

          rl.prompt();

      });


