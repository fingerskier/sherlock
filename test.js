const fs = require('fs')

let trainingData = [];

let sherlock_text = fs.readFileSync('Sherlock.txt').toString()
sherlock_text = sherlock_text.split(/[\.\;\:\!\?]/)

// fs.writeFileSync('input.json', JSON.stringify(sherlock_text))