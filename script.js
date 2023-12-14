const questions = [
  {
     question: "What is the 3-layer model in the context of software development?",
     answers: [
        { text: "A model for building a cake", correct: false},
        { text: "An architectural model with presentation layer, logical layer and data layer", correct: true},
        { text: "A model for designing clothing", correct: false},
        { text: "A model for making a sandwich", correct: false},
       ]
  },
  {
   question: "What does the presentation layer represent in the 3-layer model?",
     answers: [
        { text: "The user interface", correct: true},
        { text: "The database", correct: false},
        { text: "The server logic", correct: false},
        { text: "The communication layer", correct: false},
       ]
  },
  {
     question: "Which layer in the 3-tier model is responsible for data storage and recovery?",
     answers: [
        { text: "Presentation layer", correct: false},
        { text: "Logic layer", correct: false},
        { text: "Data layer", correct: true},
        { text: "Application layer", correct: false},
       ]
  },
  {
     question: "What is the purpose of the 3-layer model in software development??",
     answers: [
        { text: "Baking cakes", correct: false},
        { text: "Separating concerns for better modularity and maintenance", correct: true},
        { text: "Designing fashion accessories", correct: false},
        { text: "Building spacecraft", correct: false},
       ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
