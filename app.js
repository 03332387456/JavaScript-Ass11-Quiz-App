var questions = [
    {
        question: "HTML Stands for ______________",
        options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
        correctAnswer: "Hypertext Markup Language",
    },
    {
        question: "CSS Stands for ______________",
        options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
        correctAnswer: "Cascading Style Sheet",
    },
    {
        question: "JS Stands for ______________",
        options: ["JS", "JS", "JavaScript", "JS"],
        correctAnswer: "JavaScript",
    },
    {
        question: "RAM Stands for ______________",
        options: ["RAM", "RAM", "Random Access Memory", "RAM"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: "SQL Stands for ______________",
        options: ["SQL", "SQL", "Structured Query Language", "SQL"],
        correctAnswer: "Structured Query Language",
    },
    {
        question: "is HTML is Programming Language?",
        options: ["YES", "NO"],
        correctAnswer: "NO",
    },
    {
        question: "DOM Stands for ______________",
        options: ["DOM", "SQL", "Document object Model", "DOM"],
        correctAnswer: "Document object Model",
    },
    {
        question: "is Javascript is Programming Language?",
        options: ["YES", "NO"],
        correctAnswer: "NO",
    }
  
];


var currentQuestions = document.getElementById("currentQuestions")
var totalQuestion = document.getElementById("totalQuestion")
var question = document.getElementById("question")
var Answers = document.getElementById("Answers")

var indexNum = 0
var score = 0 

function rendarQuestions() {
    currentQuestions.innerHTML = indexNum + 1
    totalQuestion.innerHTML = questions.length
    var obj = questions[indexNum]
    question.innerHTML = obj.question

  

    Answers.innerHTML = ""

    for (let i = 0; i < obj.options.length; i++) {
        Answers.innerHTML += `<div class="col-md-6">
            <div class="py-3">
                <button type="button" onclick="checkAnswer('${obj.options[i]}','${obj.correctAnswer}')" class="btn btn-info w-100">
                ${obj.options[i]}
                </button>
            </div>
        </div>`;
    }
}

rendarQuestions();




function nextQuestion() {
    indexNum++;
    if (indexNum < questions.length) {
        rendarQuestions();
    } else {
        alert("Quiz completed");
        document.getElementById("nextButton").disabled = true; 
    }
}





function checkAnswer(a , b) {
    if(a == b){
        score++
        console.log(score);
    }
    nextQuestion()
}





