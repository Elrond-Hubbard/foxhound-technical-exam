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
var timeRemaining = 30;

// Each object contains a question and four answers with true/false property
const questionArray = [
    {
        question: "What is your name?",
        answers: [
            { text: "Doug", correct: false },
            { text: "Jane", correct: false },
            { text: "Sir Lancelot of Camelot", correct: true },
            { text: "Snake", correct: false },
        ]
    },
    {
        question: "What is your quest?",
        answers: [
            { text: "To start a band", correct: false },
            { text: "To steal one billion dollars", correct: false },
            { text: "To seek the Holy Grail", correct: true },
            { text: "To rescue the DARPA Chief", correct: false },
        ]
    },
    {
        question: "What is your favorite color?",
        answers: [
            { text: "Red", correct: false },
            { text: "Green", correct: false },
            { text: "Blue", correct: true },
            { text: "Yellow", correct: false },
        ]
    }
];


// When "Begin" is clicked, initialize a countdown and
// begin the quiz.
startButton.addEventListener("click", startQuiz);
function startQuiz() {
    countdown();
    showQuestion();
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
// answer and shows the next question.
function checkAnswer(button) {
    const selectedButton = button.target;
    // Points are awarded for correct answers.
    if (selectedButton.classList.contains("correct")) {
        score += 100;
        questionIndex += 1;
    // Time is deducted for incorrect answers
    } else if (selectedButton.classList.contains("false")) {
        timeRemaining -= 20;
        questionIndex += 1;
    }
    showQuestion();
}



// When timer runs out, a game over screen is displayed.
function countdown() {
    var timer = setInterval(function () {
        timeRemaining--;
        timerElement.innerText = `TIME: ${timeRemaining}`;
        if (timeRemaining < 0 || questionIndex > questionArray.length - 1) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

// The game over screen prompts the user for initials and displays
// recent scores.
function gameOver() {
    questionElement.innerText = "GAME OVER";
    answersElement.innerHTML = `<h2>submit your score</h2>`;
    timerElement.innerText = "TIME OUT!";
    clearInterval(timer);
}