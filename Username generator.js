 //Username Generator
let firstName = 'Elorm';
let lastName = 'Agbeko';
let rand = Math.floor(Math.random()*100);
let username = firstName.slice(0,3) + lastName.slice(-3); + rand;
console.log(username.toLowerCase(),rand);
