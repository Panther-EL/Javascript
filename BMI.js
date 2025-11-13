const BMI = (weight,height) => {
let BMI = weight/(height*height);

if(BMI<18.5){
  return 'Underweight';
}else if(BMI>18.5 && BMI<24.9){
  return 'Normal';
}else{
  return 'Overweight';
};
};

console.log(BMI())
