// Simple Bill Splitter
let billTotal = "4000";
let bt = Number(billTotal);
let tip = 0.1*billTotal;
let numPeople = 10;
let share = tip/numPeople;
console.log(`Each person should pay $${share}`);
