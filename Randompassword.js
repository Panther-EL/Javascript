                                   //Random password generator 
const generatePassword = (length) => {

  //Declaring possible characters
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=[]{};:/?|'
const allCharacters = letters + numbers + symbols;

//Initializing an empty password
let password ='' 

//Loop to build the password
for(let i = 0; i<length; i++){
const randomIndex = Math.floor(Math.random() * allCharacters.length)
const randomCharacter = allCharacters[randomIndex]
password += randomCharacter;
}
return password
}

console.log(generatePassword(10))
