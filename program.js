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
//replace with a single class selector?
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
//var finished = false;


//will change if the available number of options is changed
var optionNum = 4;

//selection quizframe:
// from now on, the title, choices pairing will be reffered to as a quizframe
var quizChoice = {
    title: "What kind of Quiz do you want to take?",
    choices: ["Coding", "Swords", "Mythology", "Quantum Physics"]
}

// Quiz/selection arrays:
//  each quiz contains 5 questions, each answer key likewise contains 5 entries
var codingKey = [2, 2, 3, 0, 1]; //complete
var swordKey = [2, 0, 0, 1, 3]; //complete
var mythKey = [2, 2, 3, 0, 1];
var qpKey = [2, 2, 3, 0, 1];

var quizKey = [codeQuestions, swordQuestions, mythQuestions, qpQuestions];

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

var mythQuestions = [
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

var qpQuestions = [
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
    //holders for internal logic?
    answerState.textContent = "Correct!";
    answerState.setAttribute("class", "alert alert-success");
}

//incorrect function
function inCorrect() {
    ansWrong++;
    timeLeft -= 10;
    //holders for internal logic?
    answerState.textContent = "Incorrect!";
    answerState.setAttribute("class", "alert alert-danger");
}

// loading/populating function/method.

function loadlist(quizFrame) {
    console.log(quizFrame);
    quizTitle.textContent = quizFrame.title;
    for (var i = 0; i < optionNum; i++) {
        optionIndex[i].textContent = quizFrame.choices[i];
    }
    return 0;
}

//selection function that returns a value 0,1,2, or 3 based on a clicked object.
// should modify a parent's boolean
/*
function selectionBTN() {

    //select option 0 returns 0 
    option0.addEventListener("click", function (event) {
        event.preventDefault();
        return 0;
    });

    //select option 1 returns 1 
    option1.addEventListener("click", function (event) {
        event.preventDefault();
        return 1;
    });

    //select option 2 returns 2 
    option2.addEventListener("click", function (event) {
        event.preventDefault();
        return 2;
    });

    //select option 3 returns 3 
    option3.addEventListener("click", function (event) {
        event.preventDefault();
        return 3;
    });

}
*/


// run quiz function:
// preliminary time function
function setTime() {
    timeLeft = timeSet;
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

//internal logic function.
//should take an array of questions, and the key
// currently unused for readme reasons
function runQuiz(questionSet, questionKey) {
    setTime();
    finished = false;
    while (timeLeft > 0 && !finished) {
        // checks vs. time and finished variable
        for (var curTurn = 0; curTurn < turnNum; curTurn++) {
            // calls loadlist for current turn's selection
            // resets choiceMade to false
            //var choiceMade = false;
            var curAns = questionKey[curTurn];
            var curChoice = null;
            loadlist(questionSet[curTurn]);
            while (curChoice == null) {
                //simply runs until a choice is made
                //loop possibly not needed based on how selection button may or may not be called.
                //var curChoice = null;

                //select option 0 
                option0.addEventListener("click", function (event) {
                    event.preventDefault();
                    curChoice = 0;
                    console.log("0 button pushed...")
                });

                //select option 1 
                option1.addEventListener("click", function (event) {
                    event.preventDefault();
                    curChoice = 1;
                    console.log("1 button pushed...")
                });

                //select option 2
                option2.addEventListener("click", function (event) {
                    event.preventDefault();
                    placeHolder = 2;
                    console.log("2 button pushed...")
                });

                //select option 3  
                option3.addEventListener("click", function (event) {
                    event.preventDefault();
                    curChoice = 3;
                    console.log("3 button pushed...")
                });

                if (curChoice == curAns) {
                    correct();
                    //choiceMade = true;
                }
                if (curChoice != null && curChoice != curAns) {
                    inCorrect();
                    //choiceMade = true;
                }

            }

        }
        finished = true;

    }

    console.log("finished...");
    //if/else for score:?

}

// to-run portion
$(document).ready(function () {

    loadlist(quizChoice);
    var curTurn = 0;
    var runningQuiz = false;
    var currentQuiz;

    //select option 0 code quiz
    option0.addEventListener("click", function (event) {
        event.preventDefault();
        // so the button knows its value
        var readback = 0;

        //ensures no overlap
        if (!runningQuiz) {
            runningQuiz = true;
            setTime();
            currentQuiz = 0;
            curTurn = 0;
        }
        if (currentQuiz === 0) {
            loadlist(codeQuestions[curTurn]);
            if (codeQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
        if (currentQuiz === 1) {
            loadlist(swordQuestions[curTurn]);
            if (swordQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
        if (currentQuiz === 2) {
            loadlist(mythQuestions[curTurn]);
            if (mythQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
        if (currentQuiz === 3) {
            loadlist(qpQuestions[curTurn]);
            if (qpQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }


    });

    //select option 1 
    option1.addEventListener("click", function (event) {
        event.preventDefault();
        //repeat as 0, set readback to option #
        var readback = 1;

        //ensures no overlap
        if (!runningQuiz) {
            runningQuiz = true;
            setTime();
            currentQuiz = 0;
            curTurn = 0;
        }
        if (currentQuiz === 0) {
            loadlist(codeQuestions[curTurn]);
            if (codeQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
        if (currentQuiz === 1) {
            loadlist(swordQuestions[curTurn]);
            if (swordQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
        if (currentQuiz === 2) {
            loadlist(mythQuestions[curTurn]);
            if (mythQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
        if (currentQuiz === 3) {
            loadlist(qpQuestions[curTurn]);
            if (qpQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
    });

    //select option 2
    option2.addEventListener("click", function (event) {
        event.preventDefault();
        //repeat as 0, set readback and current quiz to option #
        console.log("Myth button pushed...")
        var readback = 2;

        //ensures no overlap
        if (!runningQuiz) {
            runningQuiz = true;
            setTime();
            currentQuiz = 0;
            curTurn = 0;
        }
        if (currentQuiz === 0) {
            loadlist(codeQuestions[curTurn]);
            if (codeQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
        if (currentQuiz === 1) {
            loadlist(swordQuestions[curTurn]);
            if (swordQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
        if (currentQuiz === 2) {
            loadlist(mythQuestions[curTurn]);
            if (mythQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
        if (currentQuiz === 3) {
            loadlist(qpQuestions[curTurn]);
            if (qpQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
    });

    //select option 3  
    option3.addEventListener("click", function (event) {
        event.preventDefault();
        //repeat as 0, set readback and current quiz to option #
        console.log("Quantum physics button pushed...")
        var readback = 0;

        //ensures no overlap
        if (!runningQuiz) {
            runningQuiz = true;
            setTime();
            currentQuiz = 0;
            curTurn = 0;
        }
        if (currentQuiz === 0) {
            loadlist(codeQuestions[curTurn]);
            if (codeQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
        if (currentQuiz === 1) {
            loadlist(swordQuestions[curTurn]);
            if (swordQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
        if (currentQuiz === 2) {
            loadlist(mythQuestions[curTurn]);
            if (mythQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }
        if (currentQuiz === 3) {
            loadlist(qpQuestions[curTurn]);
            if (qpQuestions[curTurn].answer === readback) {
                correct();
                curTurn++
            } else {
                inCorrect();
                curTurn++;
            }
        }

    });


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