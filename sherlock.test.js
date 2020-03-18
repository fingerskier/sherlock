const brain = require('./brain-browser.min.js')
const fs = require('fs')

const lstm = new brain.recurrent.LSTM()
let net_json = require('./sherlock.json')

lstm.fromJSON(net_json)

const run1 = lstm.run('Sherlock')
const run2 = lstm.run('Watson')
const run3 = lstm.run('The')
const run4 = lstm.run('It')

console.log('run 1: Sherlock' + run1)
console.log('run 2: Watson' + run2)
console.log('run 3: The' + run3)
console.log('run 4: It' + run4)