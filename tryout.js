
const fs = require('fs');

var PetriClasses = require('./index.js');
var pNode = PetriClasses.pNode;
var RunPetri = PetriClasses.RunPetri;


const nodeClasses = { pNode };


/*
*/


function callbackGenerator(id,cbType) {
    if ( cbType === 'exit' ) {  // a fairly generic exit callback
        var dataExitCb = (v) => { console.log("EMIT: " + id + ": " + v) }
        return(dataExitCb)
    } else if ( cbType === 'reduce' ) {  // this is the default reducer...
        var reducer = (accumulator, currentValue) => accumulator + currentValue;
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

                      pNet.setNetworkFromJson(net_def,callbackGenerator);

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


              default: {
                  console.log("Did not recognize: " + dataArray[0]);
              }
          }

          rl.prompt();

      });


