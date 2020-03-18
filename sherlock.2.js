const brain = require('./brain-browser.min.js');
const fs = require('fs')

let net_json = require('./sherlock.json')
let trainingData = [];

let sherlock = fs.readFileSync('Sherlock.txt').toString()
sherlock = sherlock.split(/[\.\;\:\!\?]/)

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
  for (let line_number in sherlock) {
    trainingData = sherlock.slice(line_number, line_number+2)
    // trainingData = trainingData.map(el=>el.replace(/\n/g, ' '))
    // trainingData = trainingData.map(el=>el.replace(/\r/g, ' '))
    
    console.log('trainingData', line_number, trainingData)
    await setTimeout(()=>{}, 4000);
    // const saved_net = require('./book.json')
    // lstm.fromJSON()
    
    // const result = lstm.train(trainingData, {
    //   iterations: 500,
    //   log: details => console.log(details),
    //   errorThresh: 0.011
    // });
    
    // const net_json = lstm.toJSON()
    // fs.writeFileSync('./sherlock.json', JSON.stringify(net_json))
  }  
}