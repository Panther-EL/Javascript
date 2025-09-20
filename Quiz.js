//Simple Quiz app
let score = 0;
const prompt = require('prompt-sync')();

const q1 = prompt('1.What is the capital of Ghana?\n a.Accra\n b.Kumasi\n c.Takoradi\n d.Tamale\n'); //Q1
if(q1.toLowerCase() === 'a'){
    score++;
}

const q2 = prompt('2.What is the capital of Nigeria?\n a.Lagos\n b.Abuja\n c.Anambra\n d.Kwara\n'); //Q2
if(q2.toLowerCase() === 'b'){
    score++;
}

const q3 = prompt('3.Who was the first president of Ghana?\n a.Kwame Nkrumah\n b.JA Kuffor\n c.Hilla Limman\n d.Busia\n'); //Q3
if(q3.toLowerCase() === 'a'){
    score++;
}

const q4 = prompt('4.Which of the following countries is not a West African country?\n a.Nigeria\n b.Ghana\n c.Togo\n d.Sierra Leone\n'); //Q4
if(q4.toLowerCase() === 'd'){
    score++;
}

const q5 = prompt('5.Which of the following is not a noun?\n a.Bird\n b.James\n c.Dance\n d. Kasoa\n'); //Q5
if(q5.toLowerCase() === 'c'){
    score++;
}

//Remarks
if(score === 5){
    console.log('Excellent')
}else if (score === 3|| score === 4){
    console.log('Good')
}else{
    console.log('Try again')
}
