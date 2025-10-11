              //Dice roller 
const rollDice = () => {
  let randomNO = Math.floor(Math.random()*6)+1
  return randomNO
}


const rollTwoDice = () => {
  let outcome1 = rollDice() //first dice rolled
  let outcome2 = rollDice() // second dice rolled
  totalOutcome = outcome1 + outcome2 // sum of the outcome of first dice and second dice rolled
  return [outcome1,outcome2,totalOutcome]
}
const results = rollTwoDice()

//Display of results
console.log('Outcome1:', results[0])
console.log('Outcome2:',results[1])
console.log('Single dice roll:', rollDice())
console.log('Two dice roll sum:', results[2])

