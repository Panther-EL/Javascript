 //Unique word Counter
const prompt = require('prompt-sync')();

let sentence = prompt('Enter your sentence:') //Asks the user for input
let words = sentence.split(" ") //Sentence is separated into words
console.log(words) //Displays the split words

let uniqueWords = new Set(words)

//Display of results
console.log(`Total number of words: ${words.length}`)
console.log(`Total number of unique words: ${uniqueWords.size}`)
console.log(`Unique list: ${[...uniqueWords].join(",")}`) //Displays the unique words
