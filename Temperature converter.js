 //Temperature converter

//Temperature is converted from celsius to fahrenheit                                  
const celsiusToFahrenheit = () => {
  const prompt = require('prompt-sync')();
  let temperature  = Number(prompt('Enter your temperature in celsius:'))
   let fahrenheit = (temperature*9/5) + 32
  console.log(`Your temperature in fahrenheit is ${fahrenheit}`)
  return fahrenheit
}
 celsiusToFahrenheit()

//Temperature is converted from fahrenheit to celsius
const fahrenheitToCelsius = () => {
  const prompt = require('prompt-sync')()
   let temperature = Number(prompt('Enter your temperature in fahrenheit: '))
  let celsius = (temperature-32)*(5/9)
  console.log(`Your temperature in celsius is: ${celsius}`)
  return celsius
}
 fahrenheitToCelsius()


const showConversion = (type) => {
  if (type === 'C'){
    celsiusToFahrenheit()
  }else if(type === 'F'){
    fahrenheitToCelsius()
  }else{
    console.log('Invalid input')
  }
}
showConversion('F')
