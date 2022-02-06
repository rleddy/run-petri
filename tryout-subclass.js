const fs = require('fs');

var PetriClasses = require('./index.js');
var pNode = PetriClasses.pNode;
var RunPetri = PetriClasses.RunPetri;





class queueValues extends pNode {
    //
    constructor(id,nodeType) {
        super(id,nodeType)

        this.arrayResQueue = [];
    }

    count() {
        return(this.arrayResQueue.length)
    }

    addResource(value) {
        this.arrayResQueue.push(value)
    }

    consume() {
        var v = this.arrayResQueue.shift();
        return(v);
    }

}

class passStructs extends pNode {
    //
    constructor(id,nodeType) {
        super(id,nodeType)

        this.structResource = {};
    }

    count() {
        var n = Object.keys(this.structResource).length;
        return(n)
    }

    addResource(value) {
        var key = value.key;
        var data = value.value;
        this.structResource[key] = data;
    }

    consume() {
        return(this.structResource);
    }

}




const nodeClasses = { pNode, queueValues, passStructs };



function callbackGenerator(id,cbType) {

    if ( cbType === 'exit' ) {  // a fairly generic exit callback
        var dataExitCb = (v) => { console.log("EMIT: " + nodeId + ": " + v) }
        return(dataExitCb)
    } else if ( cbType === 'reduce' ) {  // this is the default reducer...
        var reducer = (accumulator, currentValue) => {
            accumulator.push(currentValue);
        }
        return(reducer);
    }

    return((v) => { console.log(v); return(0); })
}




const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'petri> '
});



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

                      pNet.setNetworkFromJson(net_def,callbackGenerator,nodeClasses);

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

                  // value : evaluate value as a javascript object

                  try {
                      var evv = "";
                      eval("evv = " + value); // using a JS trick, requiring the try catch, because it can be error prone
                      pNet.emit(sourceNode,evv);
                  } catch (e) {
                      console.dir(e,{ depth: null, colors: true });
                  }
                  //
                  break;
              }


              case "step" : {
                  pNet.step();
                  break;
              }

              case "report" : {
                  console.dir(pNet.report())
                  break;
              }


              default: {
                  console.log("Did not recognize: " + dataArray[0]);
              }
          }

          rl.prompt();

      });


