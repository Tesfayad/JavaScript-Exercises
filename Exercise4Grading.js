// conditional statement
// while loop
// am buildind this for one student then for all students
let score = 90 ;
let grade;
while (score>=60){
    if(score>=90 && score<=100){
        grade = 'A';
    } else if(score>=80 && score<=89){
        grade = 'B';
    } else if(score>=70 && score<=79){
        grade = 'C';
    } else if(score>=60 && score<=69){
        grade = 'D';
    }
console.log(`test score: ${score} 
             grade: ${grade}`);
             score -= 10;
}



