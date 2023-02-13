function gradeOfMarks (marks){
    if(marks >= 80){
        return 'A+';
    }
    else if (marks >= 70){
        return 'A';
    }
    else if (marks >= 60){
        return 'A-';
    }
    else if (marks >= 50){
        return 'B';
    }
    else if (marks >= 40){
        return 'C';
    }
    else if (marks >= 33){
        return 'D';
    }
    else{
        return 'Fall'
    }
}
const herMark = 20;
const herGrade = gradeOfMarks(herMark)
console.log('Grade: ', herGrade)