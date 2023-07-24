/////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// QUIZ GAME /////


// HTML element assignments
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer")
var questionIndex = 0;
var score = -100;
var timeRemaining = 140;

// Each object contains a question and four answers with true/false property
const questionArray = [
    {
        question: "Are you ready to begin the game?",
        answers: [
            {text: "Of course!", correct: true},
        ]
    },
    {
        question: "What is your name?",
        answers: [
            {text: "Doug", correct: false},
            {text: "Jane", correct: false},
            {text: "Sir Lancelot of Camelot", correct: true},
            {text: "Snake", correct: false},
        ]
    },
    {
        question: "What is your quest?",
        answers: [
            {text: "To start a band", correct: false},
            {text: "To steal one billion dollars", correct: false},
            {text: "To seek the Holy Grail", correct: true},
            {text: "To rescue the DARPA Chief", correct: false},
        ]
    },
    {
        question: "What is your favorite color?",
        answers: [
            {text: "Red", correct: false},
            {text: "Green", correct: false},
            {text: "Blue", correct: true},
            {text: "Yellow", correct: false},
        ]
    }
];


// This function populates the page with values from
// the currently selected question index.
function showQuestion() {
    timerElement.innerText = `TIME: ${timeRemaining}`;
    scoreElement.innerText = `SCORE: ${score}`;
    // Quiz containers reset to prevent stacking
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
            button.classList = "correct"}
        else {button.classList = "false"};
        answersElement.appendChild(button);
        button.innerText = answers.text;
        button.addEventListener("click", checkAnswer)
    })
};


// A class comparison checks the status of the selected
// answer. A point is awarded if the answer is correct, and
// time is deducted if the answer is incorrect.
function checkAnswer(button) {
    const selectedButton = button.target;
    if (selectedButton.classList.contains("correct")) {
        score += 100;
        questionIndex += 1;
    } else {
        timeRemaining -= 20
        questionIndex += 1;
    }
    showQuestion()
}

showQuestion();

// Timer
