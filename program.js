/*
Nested called functions that each govern their own divided object on the page

Ordering:
    use functions: correct and incorrect, ajust internal variables, alter textcontent and color when called
    loadList function: creates/resets array to the given array
    loadScores: swaps central div with the list of high scores
    runQuiz: plays the quiz when passed an appropriate array

 */

//Document attatchment declarations
var answerState = document.querySelector("#answer-quality");
var option0 = document.querySelector("#option0");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var quizTitle = document.querySelector(".quiz-header");
var timeDisplay = document.querySelector("#time-display");

// document attatchment utilizations
var optionIndex = [option0, option1, option2, option3];


// pseudo-constants
var timeSet = 80;
var timeLeft = 0;
var ansRight = 0;
var ansWrong = 0;

var turnNum = 5;
//var curTurn = 0;
var finished = false;


//will change if the available number of options is changed
var optionNum = 4;

//selection quizframe:
// from now on, the title, choices pairing will be reffered to as a quizframe
var quizChoice = {
    title: "What kind of Quiz do you want to take?",
    choices: ["Coding", "Swords", "Mythology", "Quantum Physics"],
    /*
    loadList: function () {
        quizTitle.textContent = this.title;
        for (var i = 0; i < optionNum; i++) {
            optionIndex[i].textContent = this.choices[i];
        }
    }
    */

}

// Quiz/selection arrays:
//  each quiz contains 5 questions, each answer key likewise contains 5 entries
var codingKey = [2, 2, 3, 0, 1]; //complete
var swordKey = [2, 0, 0, 1, 3]; //complete
var mythKey = [2, 2, 3, 0, 1];
var qpKey = [2, 2, 3, 0, 1];

var codeQuestions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: 2
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: 2
    },
    {
        title: "The kind of loop used to run a specific number of times is a _____ loop.",
        choices: ["while", "until", "do/while", "for"],
        answer: 3
    },
    {
        title: "The kind of loop used to run an indefinite number of times is a _____ loop.",
        choices: ["while", "until", "do/while", "for"],
        answer: 0
    },
    {
        title: "__ is operator used to compare equivalecy between two values of the same type.",
        choices: ["==", "===", "<", ">"],
        answer: 1
    }
];

var swordQuestions = [
    {
        title: "A Claymore is a two-handed _______ variant of the basket-hilted sword.",
        choices: ["English", "German", "Scottish", "French"],
        answer: 2
    },
    {
        title: "The unsharpened portion at the base of a blade is called the ________.",
        choices: ["Ricasso", "Chappe", "Quillion", "Spatha"],
        answer: 0
    },
    {
        title: "Early Bronze swords were produced by a process called _______",
        choices: ["Casting", "Forging", "Sintering", "Electroplating"],
        answer: 0
    },
    {
        title: "______ was the primary base component of post 14th century Japanese swords.",
        choices: ["Shakudo", "Tamahagane", "Hihi'rogane", "Shibuichi"],
        answer: 1
    },
    {
        title: "Since 500 BCE this area of spain has been awell known source of high-quality sword steel.",
        choices: ["Andalusia", "Valencia", "Galicia", "Toledo"],
        answer: 3
    },
];


// use functions:

//correct function
function correct() {
    ansRight++;
    answerState.textContent = "Correct!";
    answerState.setAttribute("class", "alert alert-success");
}

//incorrect function
function inCorrect() {
    ansWrong++;
    timeLeft -= 10;
    answerState.textContent = "Incorrect!";
    answerState.setAttribute("class", "alert alert-danger");
}

// loading/populating function/method.

function loadlist(quizFrame){
    console.log(quizFrame);
    quizTitle.textContent = quizFrame.title;
    for (var i = 0; i < optionNum; i++){
        optionIndex[i].textContent = quizFrame.choices[i];
    }
    return 0;
}


// run quiz function:
// preliminary time function
function setTime() {
    timeLeft = timeSet;
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeDisplay.textContent = timeLeft;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

//internal logic function.
//should take an array of questions
function runQuiz (){
    while (timeLeft > 0 && !finished){
        // checks vs. time and finished variable
        for (var curTurn = 0; curTurn < turnNum; curTurn++){
            // calls loadlist for 
            var choiceMade = false;
            while (!choiceMade){

            }

        }

    }

}

// to-run portion
$(document).ready(function () {

    loadlist(quizChoice);
    //quizChoice.loadList();

    setTime();

    //testing buttons for correct/incorrect
    $("#right-button").on("click", function () {
        correct();
        console.log("Right Answer button pushed...")
        console.log(ansRight);
    });

    $("#wrong-button").on("click", function () {
        inCorrect();
        console.log("Wrong Answer button pushed...")
        console.log(ansWrong);
        console.log(timeLeft);
    });




});