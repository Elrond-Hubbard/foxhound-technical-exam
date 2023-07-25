/////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// QUIZ GAME /////


// Global variable assignments
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer")
const startButton = document.getElementById("begin");
var questionIndex = 0;
var score = 0;
var timeRemaining = 6000;
const bgmEncounter = new Audio("./assets/audio/bgmEncounter.wav");
const sfxAlert = new Audio("./assets/audio/incorrect.wav")


// When "Begin" is clicked, a countdown is initialized
// and the first question is shown.
startButton.addEventListener("click", startQuiz);
function startQuiz() {
    countdown();
    showQuestion();
    bgmEncounter.play()
}


// This function populates the page with values from
// the currently selected question index.
function showQuestion() {

    // Display scorecard
    scoreElement.innerText = `SCORE: ${score}`;

    // Reset quiz containers to prevent stacking
    answersElement.innerHTML = "";
    questionElement.innerText = "";

    // Set the current question to question index value
    // and push question text to question element
    currentQuestion = questionArray[questionIndex];
    questionElement.innerText = currentQuestion.question;

    // For each answer, create a button,
    // define class, and push answer text to it.
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        if (answers.correct) {
            button.classList = "correct"
        }
        else { button.classList = "false" };
        answersElement.appendChild(button);
        button.innerText = answers.text;
        button.addEventListener("click", checkAnswer)
    })
};


// A class comparison checks the status of the selected
// answer.
function checkAnswer(button) {
    const selectedButton = button.target;

    // Points are awarded for correct answers.
    if (selectedButton.classList.contains("correct")) {
        score += 100;
        scoreElement.style.color = "#F8A145";
        timerElement.style.color = "#F07900";
    // Time is deducted for incorrect answers
    } else if (selectedButton.classList.contains("false")) {
        timeRemaining -= 1000;
        sfxAlert.play();
        scoreElement.style.color = "#F07900";
        timerElement.style.color = "#D20100";
    }

    // Regardless of answer, the next question is shown.
    questionIndex++;
    showQuestion();
}


// When timer runs out, a game over screen is displayed.
function countdown() {
    var timer = setInterval(function () {
        timeRemaining--;
        timerElement.innerText = `TIME: ${(timeRemaining / 100).toFixed(2)}`;
        if (timeRemaining < 0 || questionIndex >= questionArray.length) {
            gameOver();
        }
    }, 10);
}


// The game over screen prompts the user for initials and displays
// recent scores.
function gameOver() {
    clearInterval(timer);
    questionElement.innerText = "GAME OVER";
    answersElement.innerHTML = `<h2>submit your score</h2>`;
    timerElement.innerText = "TIME OUT!";
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// QUESTION BANK /////

const questionArray = [
    {
        question: "Javascript is an ____ language.",
        answers: [
            { text: "Object-Oriented", correct: true },
            { text: "Object-Based", correct: false },
            { text: "Procedural", correct: false },
            { text: "None of the above", correct: false },
        ]
    }, {
        question: "Which of the following keywords defines a variable?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "Both A and B", correct: true },
            { text: "None of the above", correct: false },
        ]
    }, {
        question: "Which method is used to access HTML elements?",
        answers: [
            { text: "getElementById()", correct: false },
            { text: "getElementsByClassName()", correct: false },
            { text: "Both A and B", correct: true },
            { text: "None of the above", correct: false },
        ]
    }, {
        question: "What does the interpreter with empty statements?",
        answers: [
            { text: "Throws an error", correct: false },
            { text: "Ignores the statements", correct: true },
            { text: "Gives a warning", correct: false },
            { text: "None of the above", correct: false },
        ]
    }, {
        question: "Which method can be used to display data?",
        answers: [
            { text: "document.write()", correct: false },
            { text: "console.log()", correct: false },
            { text: "window.alert()", correct: false },
            { text: "All of the above", correct: true },
        ]
    }, {
        question: "How can a datatype be declared to be a constant?",
        answers: [
            { text: "const", correct: true },
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "constant", correct: false },
        ]
    }, {
        question: "What does the debugger statement do?",
        answers: [
            { text: "Debug all errors in the program at runtime", correct: false },
            { text: "It acts as a breakpoint in the program", correct: true },
            { text: "It will debug error in the current statement", correct: false },
            { text: "All of the above", correct: false },
        ]
    }, {
        question: "What is your name?",
        answers: [
            { text: "Doug", correct: false },
            { text: "Sir Lancelot of Camelot", correct: true },
            { text: "Jane", correct: false },
            { text: "Snake", correct: false },
        ]
    }, {
        question: "What is your quest?",
        answers: [
            { text: "To start a band", correct: false },
            { text: "To steal one billion dollars", correct: false },
            { text: "To seek the Holy Grail", correct: true },
            { text: "To rescue the DARPA Chief", correct: false },
        ]
    }, {
        question: "What is your favorite color?",
        answers: [
            { text: "Blue", correct: true },
            { text: "Yellow", correct: false },
            { text: "Red", correct: false },
            { text: "Green", correct: false },
        ]
    },
];