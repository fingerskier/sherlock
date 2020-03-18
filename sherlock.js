const brain = require('./brain-browser.min.js');
const fs = require('fs')
const net_file = './book.json'

let training_data = [
  'Jane saw Doug.',
  'Doug saw Jane.',
  'Spot saw Doug and Jane looking at each other.',
  'It was love at first sight, and Spot had a frontrow seat.',
  'It was a very special moment for all.'
];
// let training_data = [
// 'To Sherlock Holmes she is always _the_ woman.',
// 'I have seldom heard him',
// 'mention her under any other name.',
// 'In his eyes she eclipses and',
// 'predominates the whole of her sex.',
// 'It was not that he felt any emotion',
// 'akin to love for Irene Adler.',
// 'All emotions, ',
// 'and that one particularly,',
// 'were abhorrent to his cold, ',
// 'precise but admirably balanced mind.',
// 'He was, ',
// 'I take it, ',
// 'the most perfect reasoning and observing machine that',
// 'the world has seen, ',
// 'but as a lover he would have placed himself in a',
// 'false position.',
// 'He never spoke of the softer passions, ',
// 'save with a gibe',
// 'and a sneer.',
// 'They were admirable things for the observer—excellent for',
// 'drawing the veil from men’s motives and actions.',
// 'But for the trained',
// 'reasoner to admit such intrusions into his own delicate and finely',
// 'adjusted temperament was to introduce a distracting factor which might',
// 'throw a doubt upon all his mental results.',
// 'Grit in a sensitive',
// 'instrument, ',
// 'or a crack in one of his own high-power lenses, ',
// 'would not',
// 'be more disturbing than a strong emotion in a nature such as his.',
// 'And',
// 'yet there was but one woman to him, ',
// 'and that woman was the late Irene',
// 'Adler, ',
// 'of dubious and questionable memory.',
// ]

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