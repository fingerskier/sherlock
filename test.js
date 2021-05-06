const brain = require('brain.js')
const path = require('path')
const testingData = [
  'Sherlock was',
  'Holmes is',
  'I was',
  'There they were',
]

let netFile = process.argv[2] || './model.sherlock.json'

netFile = path.resolve(netFile)

let model

try {
  model = require(netFile)
} catch (error) {
  console.error(model)
}

const lstm = new brain.recurrent.LSTM();
if (model) lstm.fromJSON(model)

for (let testPhrase of testingData) {
  console.log('run:', testPhrase, lstm.run(testPhrase))
}
