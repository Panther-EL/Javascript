const smartCalculator = (a, sign = '+',...b) =>{
let result
if(typeof sign !== 'string'){
  b.unshift(sign)
  sign = '+'
}

//Addition
if (sign === '+'){
result = a 
  b.forEach((i) => {
result += i
})
}

//Subtraction
else if (sign === '-'){
result = a
  b.forEach((i) =>{
result -= i
})
}

//Multiplication
else if (sign === '*'){
result = a
  b.forEach((i) =>{
result *= i
})
}

//Division
else if (sign === '/'){
result = a
  b.forEach((i) =>{
result /= i
})
}

return result
}

//Test cases
 console.log(smartCalculator(8,'/',4,2))
console.log(smartCalculator(8,'*',4,2))
 console.log(smartCalculator(8,'-',4,2))
 console.log(smartCalculator(8,4,2))
