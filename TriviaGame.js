function check(){
    
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = docuement.quiz.question10.value;
var question11 = document.quiz.question11.value;
var quiestion12 = documenet.quiz.question12.value;
var correct = 0;

    if (question1 == "Pride") {
        correct ++;
}

    if (question2 == "Lizard") {
        correct ++;
}

    if (question3 == "False") {
        correct ++;
}

    if (question4 == "10") {
        correct ++;
}

    if (question5 == "8") {
        correct ++;
}

    if (question6 == "None of The Above") {
        correct ++;
}

    if (question7 == "Snake") {
        correct ++;
}

    if (question8 == "Bat") {
        correct ++;
}

    if (question9 == "Shark") {
        correct ++;
}

    if (question10 == "Chicekn") {
        correct ++;
}

    if (question11 == "Rottweiller") {
        correct ++;
}

    if (question12 == "All of The Above") {
        correct ++;
}

var messages = ["Bingo!", "Eh", "Try Again"];
var range;

    if (correct <1) {
        range = 2;
    }

    if (correct > 0 && correct <3){
        range = 1;
    }

    if (correct = 2) {
        range = 0;
    }


document.getElementById("after_submit").style.visibility = "visible";


document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + "correct.";
}










