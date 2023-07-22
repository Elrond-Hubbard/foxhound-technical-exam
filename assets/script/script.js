// Define question and answer elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers")

// Define each question object in an array
const questionArray = [
    {
        question: "What is your name?",
        answers: [
            {text: "Doug", correct: false},
            {text: "Jane", correct: false},
            {text: "Michael", correct: true},
            {text: "Snake", correct: false},
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
    // Set the current question to question index value
    questionIndex = 0;
    currentQuestion = questionArray[questionIndex];
    // Push question object text to question element
    questionElement.innerText = questionArray[questionIndex].question;
    // For each answer, create a button
    // and push answer text to it.
    currentQuestion.answers.forEach(answers => {
        button = document.createElement("button");
        button.classList.add("button");
        answersElement.appendChild(button);
        button.innerHTML = answers.text;
    })
}

showQuestion();