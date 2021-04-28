const brain = require('brain.js');
const fs = require('fs')
const net_file = './book.json'

let training_data = [
  'Jane saw Doug.',
  'Doug saw Jane.',
  'Spot saw Doug and Jane looking at each other.',
  'It was love at first sight, and Spot had a frontrow seat.',
  'It was a very special moment for all.'
];

const lstm = new brain.recurrent.LSTM();

// let net_json = require(net_file)
// lstm.fromJSON()

let sherlock = fs.readFileSync('Sherlock.txt').toString()
sherlock = sherlock.split(/[\.\;\:\!\?]/)
// sherlock = sherlock.split(/\r\n/)
let random_line = Math.floor(Math.random()*sherlock.length)
// training_data = sherlock.slice(random_line, random_line+10)
// training_data = training_data.map(el=>el.replace(/\r\n/, ' '))

console.log(training_data)


for (let line of training_data) {
  console.log(line)

  let result = lstm.train(line, {
    iterations: 100,
    log: details => console.log(details),
      errorThresh: 0.025
    }
  )
}

let run = lstm.run('Sherlock');
console.log('run:' + run);

net_json = JSON.stringify(lstm.toJSON())
fs.writeFile('./book.json', net_json)