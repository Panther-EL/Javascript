let students = []; //Array storing students

//Adds a new student
const addStudent = (name,score) => {
  let student = {
    name:name,
    score:score
  }
  students.push(student)
  console.log(students)
}
//Test cases
addStudent('John',34)
addStudent('Joana',74)
addStudent('Jael',34)



//Update a student's score
const updateScore = (name,newScore) => {
  let student = students.find(student => student.name === name)
  if(student){
    student.score = newScore // Student's score is updated
    console.log(`${name}'s score has been updated to ${newScore}`)
  }else{
    console.log('You have entered an invalid name')
  }
  console.log(students)
}

//Test cases
updateScore('John',53)
updateScore('Joana',29)
updateScore('Jael',52)



//Calculate grade
const calculateGrade = (score) => {
  if(score>=90) return 'A'
  else if(score>=80) return 'B'
  else if(score>=70) return 'C'
  else if(score>=60) return 'D'
  else return 'F'  
}

console.log(calculateGrade(50))

//Calculate average score
const calculateAverage = () => {
  if(students.length === 0){
    return 0
  }else if (students.length >= 1){
    let average = 0
    for(let i = 0; i<students.length; i++){
      average += students[i].score/students.length
    }
     console.log(`The average is ${average}`)
  }
}
console.log(calculateAverage())



//Display all students
const displayStudents = (name,score,newScore) => {
  updateScore(name,newScore)
  calculateGrade(score)
  calculateAverage()

}

displayStudents()
