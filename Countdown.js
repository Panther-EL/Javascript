                                 //Countdown timer
let countdown //holds the set interval reference
let timeLeft

const startCountDown = (timeInSeconds) => {
 timeLeft = timeInSeconds //stores the input time

countdown = setInterval(() => {
  console.log(timeLeft)
  timeLeft--
  if(timeLeft < 0){
  clearInterval(countdown)
  console.log("Time's up")
}
},1000)
  return
}

//Gives the latest time
const UpdateDisplay = () => {
console.log(`Time left: ${timeLeft} seconds`)
return
}

//Makes the time 0
const resetCountDown = () => {
clearInterval(countdown)
//  timeLeft = 0
console.log(`Congratulations! your time has been reset ${timeLeft} seconds`)
return
}

//Test case
startCountDown(5)
UpdateDisplay()
