const questions = [
  {
     question: "Vraag 1 text",
     answers: [
        { text: "goed antwoord", correct: true},
        { text: "optie antwoord", correct: false},
        { text: "optie antwoord", correct: false},
        { text: "optie antwoord", correct: false},
       ]
  },
  {
   question: "Vraag 2 text",
     answers: [
        { text: "goed antwoord", correct: true},
        { text: "optie antwoord", correct: false},
        { text: "optie antwoord", correct: false},
        { text: "optie antwoord", correct: false},
       ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

ley currentQuestionindex = 0;
let score = 0;

function startquiz(){
  currentQuestionIndex
  score = 0
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex +1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;
}
