// Simple Bill Splitter


let billTotal = "4000";
let bt = Number(billTotal);
let tip = 0.1*billTotal;
let numPeople = 10;
let share = tip/numPeople;
console.log(`Each person should pay $${share}`);



//Username Generator
let firstName = 'Elorm';
let lastName = 'Agbeko';
let rand = Math.floor(Math.random()*100);
let username = firstName.slice(0,3) + lastName.slice(-3); + rand;
console.log(username.toLowerCase(),rand);


