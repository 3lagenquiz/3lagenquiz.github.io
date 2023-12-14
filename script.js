const questions = [
  {
     question: "Welke laag is verantwoordelijk voor het verzenden en ontvangen van gegevens tussen eindapparaten over het netwerk?",
     answers: [
        { text: "Applicatielaag", correct: false},
        { text: "Transportlaag", correct: false},
        { text: "Netwerklaag", correct: true},
        { text: "Fysieke laag", correct: false},
       ]
  },
  {
   question: "Bij welke laag worden gegevens geordend en verpakt voor efficiënte overdracht?",
     answers: [
        { text: "Applicatielaag", correct: false},
        { text: "Datalinklaag", correct: false},
        { text: "Netwerklaag", correct: false},
        { text: "Transportlaag", correct: true},
       ]
  },
  {
     question: "Welke laag bepaalt de beste route voor het verzenden van gegevens van de ene naar de andere locatie?",
     answers: [
        { text: "Transportlaag", correct: false},
        { text: "Netwerklaag", correct: true},
        { text: "Fysieke laag", correct: false},
        { text: "Applicatielaag", correct: false},
       ]
  },
  {
     question: "Waar bevindt zich de IP-adressering en routering in het 3-lagenmodel?",
     answers: [
        { text: "Applicatielaag", correct: false},
        { text: "Datalinklaag", correct: false},
        { text: "Netwerklaag", correct: true},
        { text: "Transportlaag", correct: false},
       ]
  },

 {
     question: "Bij welke laag wordt het TCP-protocol gebruikt voor betrouwbare gegevensoverdracht??",
     answers: [
        { text: "Transportlaag", correct: true},
        { text: "Netwerklaag", correct: false},
        { text: "Fysieke laag", correct: false},
        { text: "Datalinklaag", correct: false},
       ]
  },

   {
     question: "Welke laag van het 3-lagenmodel biedt diensten zoals HTTP, FTP en SMTP?",
     answers: [
        { text: "Applicatielaag", correct: true},
        { text: "Transportlaag", correct: false},
        { text: "Netwerklaag", correct: false},
        { text: "Datalinklaag", correct: false},
       ]
  },

      {
     question: "Welke laag in het 3-lagenmodel behandelt de fysieke verbinding en signalering van gegevens?",
     answers: [
        { text: "Transportlaag", correct: false},
        { text: "Netwerklaag", correct: false},
        { text: "Fysieke laag", correct: true},
        { text: "Datalinklaag", correct: false},
       ]
  },

         {
     question: "Bij welke laag worden frames en MAC-adressen gebruikt om gegevens over een lokale netwerkverbinding te verzenden?",
     answers: [
        { text: "Applicatielaag", correct: false},
        { text: "Transportlaag", correct: false},
        { text: "Datalinklaag", correct: true},
        { text: "Netwerklaag", correct: false},
       ]
  },
               {
     question: "Welke laag van het 3-lagenmodel gebruikt protocollen zoals Ethernet, WLAN en Bluetooth?",
     answers: [
        { text: "Transportlaag", correct: false},
        { text: "Datalinklaag", correct: true},
        { text: "Netwerklaag", correct: false},
        { text: "Applicatielaag", correct: false},
       ]
  },

                  {
     question: "Waar is het gebruik van poorten en sessie-informatie typisch voor in het 3-lagenmodel?",
     answers: [
        { text: "Applicatielaag", correct: true},
        { text: "Datalinklaag", correct: false},
        { text: "Transportlaag", correct: false},
        { text: "Netwerklaag", correct: false},
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
