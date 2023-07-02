const questions = [
  {
    question: "What is HTML?",
    a: "HyperText Markup Language",
    b: "Styling Language",
    c: "Programming Language",
    d: "None",
    correct: "a",
  },
  {
    question: "What is CSS?",
    a: "HyperText Markup Language",
    b: "Styling Language",
    c: "Client Side Scripting",
    d: "Server Side Scripting",
    correct: "b",
  },
  {
    question: "What is JavaScript primarily used for?",
    a: "Styling web pages",
    b: "Creating interactive web elements",
    c: "Managing databases",
    d: "None",
    correct: "b",
  },
  {
    question: "What is PHP?",
    a: "Client Side Scripting",
    b: "Styling Language",
    c: "Server Side Scripting",
    d: "None",
    correct: "c",
  },
  {
    question: "Which of the following is true about Python?",
    a: "Python is a high-level programming language.",
    b: "Python is primarily used for web development.",
    c: "Python is a markup language.",
    d: "None",
    correct: "a",
  },
  {
    question: "What does HTTP stand for?",
    a: "HyperText Transfer Protocol",
    b: "Hyperlink Text Technology",
    c: "HyperText Terminal Program",
    d: "None",
    correct: "a",
  },
];

let currentIndex = 0;
let score = 0;

loadQuestion(currentIndex);

const btnSubmitElement = document.querySelector("#btn-submit");
const btnRestartElement = document.querySelector("#btn-restart");
const scoreElement = document.querySelector("#score");
const mainElement = document.getElementById("main");

btnSubmitElement.addEventListener("click", function () {
  let result = validateInputs();
  if (result) {
    const currentQuestion = questions[currentIndex];
    if (currentQuestion.correct == result) {
      score++;
    } else {
      //   console.log("Incorrect");
    }

    currentIndex++;
    if (currentIndex < questions.length) {
      error.innerText = "";
      loadQuestion(currentIndex);
    } else {
      console.log("Restart the quiz and score is " + score);

      mainElement.style.display = "none";
      btnSubmitElement.style.display = "none";
      btnRestartElement.style.display = "block";
      scoreElement.innerText = "Your score is " + score;
    }
    uncheckInput(result);
  } else {
    error.innerText = "Select atleast 1!";
  }
});

function loadQuestion(index) {
  const currentQuestion = questions[index];

  const questionTextElement = document.querySelector("#question-text");
  const aTextElement = document.querySelector("#a_text");
  const bTextElement = document.querySelector("#b_text");
  const cTextElement = document.querySelector("#c_text");
  const dTextElement = document.querySelector("#d_text");

  questionTextElement.innerText = currentQuestion.question;
  aTextElement.innerText = currentQuestion.a;
  bTextElement.innerText = currentQuestion.b;
  cTextElement.innerText = currentQuestion.c;
  dTextElement.innerText = currentQuestion.d;
}

function validateInputs() {
  const choicesElements = document.querySelectorAll(".answer");
  //   const choicesElements = document.querySelectorAll('input[name="choice"]');

  let result = false;
  choicesElements.forEach(function (element) {
    if (element.checked) {
      result = element.id;
    }
  });
  return result;
}

function uncheckInput(id) {
  const choiceElement = document.querySelector("#" + id);
  choiceElement.checked = false;
}

btnRestartElement.addEventListener("click", function () {
  location.reload();
});
