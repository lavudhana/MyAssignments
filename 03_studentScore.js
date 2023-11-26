let score = 40;
let result = calculateGrade(score);
console.log(result);

function calculateGrade(score){
    switch (true){
        case score >= 80 :
            return "Grade is A+";
        case score >= 70 :
            return "Grade is A";
        case score >= 60 :
            return "Grade is B+";
        case score >= 50 :
            return "Grade is B";
        case score >= 40 :
            return "Grade is C+";
        case score >= 30 :
            return "Grade is C";
        default :
        return "Grade is D"
    }
}