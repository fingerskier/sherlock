const brain = require('brain.js')
const num_text_lines = 11890
const path = require('path')
const trainer = require('../train_lstm_brain')
const trainingSize = 5

let netFile = process.argv[2] || './model.sherlock.json'
let dataFile = process.argv[3] || './Sherlock.txt'

netFile = path.resolve(netFile)
dataFile = path.resolve(dataFile)

for (let I=5500; I < trainingSize; I++) {
// for (let I=num_text_lines-trainingSize; I < trainingSize; I++) {
  trainer(netFile, dataFile, I)
}