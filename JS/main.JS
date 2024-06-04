function calculateTotal() {
    let math = Number(document.getElementById("math").value);
    let english = Number(document.getElementById("english").value);
    let kiswahili = Number(document.getElementById("kiswahili").value);
    let science = Number(document.getElementById("science").value);
    let form = document.getElementById("marksForm")
    let total;
    let average;
   
    total = (math + english + kiswahili + science);
    document.getElementById("displayTotal").innerHTML = "Your total score is: " + total
    // write("Your total score is: " + total + "<br>");
    average = total / 4;
    document.getElementById("Grade").innerHTML = "Your Average score is: " + average
   
   
    if (average >= 80 && average <= 100) {
     document.getElementById("averageGrade").innerHTML = "Your grade is: " + "A"
    }
    else if (average >= 70 && average <= 79) {
     document.getElementById("averageGrade").innerHTML = "Your grade is: " + "B"
    }
    else if (average >= 60 && average <= 69) {
     document.getElementById("averageGrade").innerHTML = "Your grade is: " + "C"
    }
    else if (average >= 50 && average <= 59) {
     document.getElementById("averageGrade").innerHTML = "Your grade is: " + "D"
    }
    else {
     document.getElementById("averageGrade").innerHTML = "Your grade is: " + "E"
    }
    form.reset()
   
   }