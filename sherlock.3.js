const brain = require('./brain-browser.min.js');
const fs = require('fs')

let net_json = require('./sherlock.json')
let trainingData = [];

const sherlock_text = require('./input.json')
const span = 2

const lstm = new brain.recurrent.LSTM();
lstm.fromJSON(net_json)

main().then(()=>{
  const run1 = lstm.run('Sherlock');
  const run2 = lstm.run('Watson');
  const run3 = lstm.run('The');
  const run4 = lstm.run('It');
  
  console.log('run 1: Sherlock' + run1);
  console.log('run 2: Watson' + run2);
  console.log('run 3: The' + run3);
  console.log('run 4: It' + run4);
})
.catch(error=>console.error(error))


async function main() {
  let line = 100
  for (line=0; line < sherlock_text.length-span; line+=span) {
    trainingData = [
      sherlock_text[line],
      sherlock_text[line+1],
      sherlock_text[line+2],
    ]
    
    console.log('trainingData', trainingData)
    await setTimeout(()=>{}, 4000);
    
    const result = lstm.train(trainingData, {
      iterations: 500,
      log: details => console.log(details),
      errorThresh: 0.011
    });
    
    const net_json = lstm.toJSON()
    fs.writeFileSync('./sherlock.json', JSON.stringify(net_json))
  }  
}