const brain = require('brain.js')
const path = require('path')
const trainer = require('../train_lstm_brain')

let netFile = process.argv[2] || './model.sherlock.json'
let dataFile = process.argv[3] || './Sherlock.txt'

netFile = path.resolve(netFile)
dataFile = path.resolve(dataFile)

for (let I=0; I < 9311; I++) {
  trainer(netFile, dataFile, I)
}