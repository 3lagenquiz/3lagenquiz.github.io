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
const answerButtons = document.getElementById("answer-buttons");
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
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex +1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTMl = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}


function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.fistChild);
    }
}

function selcectAnswer(e){
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect){
      selectBtn.classList.add("correct");
  }else{
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classlist.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

startQuiz();
