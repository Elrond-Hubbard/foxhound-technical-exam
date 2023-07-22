
// // Define each answer button on the page
// const buttonA = document.querySelector("#buttonA");
// const buttonB = document.querySelector("#buttonB");
// const buttonC = document.querySelector("#buttonC");
// const buttonD = document.querySelector("#buttonD");

// buttonA.addEventListener("click", click);
// buttonB.addEventListener("click", click);
// buttonC.addEventListener("click", click);
// buttonD.addEventListener("click", click);
// function click() {
//     console.log("CLICK!!!")
// }

// Define question and answer elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers")

// Define each question object in an array
const qArray = [
    {
        question: "What is your name?",
        answers: [
            {text: "Doug", correct: false},
            {text: "Jane", correct: false},
            {text: "Michael", correct: true},
            {text: "Snake", correct: false},
        ]
    }
];

