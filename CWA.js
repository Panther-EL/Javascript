//credit hours
let commSkillsHrs = 3;
let programmingHrs = 4;
let mathHrs = 3;

//marks
let commSkillsMarks = 90;
let programmingMarks = 85;
let mathMarks = 92;


function cwa (commSkillsMarks,programmingMarks,mathMarks ){
    let cwaVal =(commSkillsMarks*commSkillsHrs+programmingMarks*programmingHrs+mathMarks*mathHrs)/10
    return cwaVal;
}

//Test case
console.log(cwa(70,80,90))
