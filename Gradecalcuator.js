          Grade calculation 
const calculateGrade = (mark) => {
   let grade
    
     if(mark>=90){
      grade ='A'
     } else if(mark>=80){
      grade = 'B'
     } else if(mark>=70){
      grade = 'C'
     } else if(mark>=60){
      grade ='D'
     } else{
      grade = 'F'
     }
     return grade
}
console.log(calculateGrade(70))

//Display of results
const showResult = (name,score) => {
  let grade = calculateGrade(score)
  console.log(`${name} scored ${score} which is a/an  ${grade} `)
}

showResult('John',50)


      
