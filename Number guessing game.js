 //Number guessing game
const prompt = require('prompt-sync')();
let magicNumber = Math.floor(Math.random()*100)+1; //random number

                  //Main program
while(true){
guess = prompt('Enter your number: ');
if(guess>magicNumber){
  console.log('Too high!');
}else if(guess<magicNumber){
  console.log('Too low!');
}else{
  console.log('Correct guess');
  console.log('You win');
  break
}
}
