                                //Countdown timer
let countdown //holds the set interval reference
let timeLeft

const startCountDown = (timeInSeconds) => {
 timeLeft = timeInSeconds //stores the input time

console.log(`Starting countdown at ${timeInSeconds} seconds`)
 UpdateDisplay()

countdown = setInterval(() => {
   timeLeft--

  if(timeLeft < 0){
  clearInterval(countdown)
  console.log("Time's up")
  return
}

UpdateDisplay()
},1000)
  
}

//Gives the latest time
const UpdateDisplay = () => {
console.log(`Time left: ${timeLeft} seconds`)
return
}

//Test case
startCountDown(10)
