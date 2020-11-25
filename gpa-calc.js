//Josh Lee, 11/24/20 this is a GPA calculator.
function getGrades(){
var elMsg = document.getElementById('grades');
var elMsg = document.getElementById('username');
}
myArray = grades = [95, 85, 75];
var sum = 0;
var average = 0;
var count = grades.length;
for(i = 0; i <= 3; i++) {


if(grades[i] >=90){
sum = sum + 4; 
} else if(grades[i] >= 80 && grades[i] < 90){
    sum = sum + 3;
} else if(grades[i] >= 70 && grades[i] < 80) {
    sum = sum + 2;
}else if(grades[i] >=60 && grades[i] < 70){
    sum = sum + 1;
} else{
   console.log("Bye");
}


}
average = sum/count;
console.log(average);