const questions = [
  {
     question: "Which is the largest animal in the world?",
     answers: [
        { text: "Shark", correct: false},
        { text: "Blue Whale", correct: true},
        { text: "Elephant", correct: false},
        { text: "Giraffe", correct: false},
       ]
  },
  {
   question: "Wich is the smallest country in the world?",
     answers: [
        { text: "Vatican City", correct: true},
        { text: "Bhutan", correct: false},
        { text: "Nepal", correct: false},
        { text: "Shri Lanka", correct: false},
       ]
  },
  {
     question: "Wich is the largest desert in the wordl?",
     answers: [
        { text: "Kalahari", correct: false},
        { text: "Gobi", correct: false},
        { text: "Sahara", correct: false},
        { text: "Antartica", correct: true},
       ]
  },
  {
     question: "Which is the smallest continent in the world?",
     answers: [
        { text: "Asia", correct: false},
        { text: "Australia", correct: true},
        { text: "Artctic", correct: false},
        { text: "Africa", correct: false},
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
    score++;
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

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of {questions.lenght}!`;
  nextButton.innerHTML = "Play Again"
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex <questions.lenght){
    showQuestion();
  }else{
    showScore();
  }
}


nextButton.addEventlistener("click", ()=>{
  if(currentQuestionIndex < questions.lenght){
    handleNextButton();
  }else{
    startQuiz();
  }
});


startQuiz();
