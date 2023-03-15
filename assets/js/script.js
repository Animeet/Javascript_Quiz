var countdownDisplay = document.querySelector('#count-down');
var start = document.querySelector('#start')
var quiz = document.querySelector('#quiz')
var question = document.getElementById('question');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');

var currentQuestionIndex = 0;


// *****  COUNTDOWN  ***** //

// function initialCountdown() {
//     var count = 30;
//     var timer = setInterval(function() {
//         count--; 
//         countdownDisplay.innerText = 'Count: ' + count;

//         if (!count) {
//             clearInterval(timer);
//             alert('Sorry, time is up!');
//         }
//     }, 1000);
// }

// function init() {
//     initialCountdown();
// }

// init();


// ***** QUESTIONS & ANSWERS ***** //

var questions = [
    {
        question: 'Javascript is an _______ language?',
        choiceA: 'Object-Oriented',
        choiceB: 'Object-Based',
        choiceC: 'Procedural',
        choiceD: 'None of the above',
        answer: 'A'
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choiceA: 'var',
        choiceB: 'let',
        choiceC: 'Both A and B',
        choiceD: 'None of the above',
        answer: 'C'
    },
    {
        question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
        choiceA: 'Throws an error',
        choiceB: 'Ignores the statements',
        choiceC: 'Gives a warning',
        choiceD: 'None of the above',
        answer: 'B'
    },
    {
        question: 'How can a datatype be declared to be a constant type?',
        choiceA: 'const',
        choiceB: 'var',
        choiceC: 'let',
        choiceD: 'constant',
        answer: 'A'
    },
    {
        question: 'What is the use of the <noscript> tag in Javascript?',
        choiceA: 'The contents are displayed by non-JS-based browsers.',
        choiceB: 'Clears all the cookies and cache.',
        choiceC: 'Both A and B.',
        choiceD: 'None of the above.',
        answer: 'A'
    }
];

var lastQuestion = questions.length - 1;
var currentQuestion = 0;

function showQuestion() {
    var q = questions[currentQuestion];

    question.innerHTML = '<p>'+ q.question +'</p>';
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz)

function startQuiz() {
    start.style.display = 'none';
    showQuestion();
    quiz.style.display= 'block';
}
