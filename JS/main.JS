let math=10,english=14,kiswahili=15,cre=18, total;
total=math+english+kiswahili+cre;
let average=total/4

if(average >= 80 && average <= 100){
        document.getElementById("averageGrade").innerHTML="Your grade is" + "A";
    }
else if (average >=70 && average <= 79){
    document.getElementById("averageGrade").innerHTML="Your grade is" + "B";
}
else if (average >=60 && average <= 69){
    document.getElementById("averageGrade").innerHTML="Your grade is" + "c";
}
else if(average >=40 && average <= 49){
    document.getElementById("averageGrade").innerHTML="Your grade is" + "D";
}
else {
    document.getElementById("averageGrade").innerHTML="Your grade is" +"E";
}
form.rest()