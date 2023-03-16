// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score





var countdownDisplay = document.querySelector('#count-down');
var startContainer = document.querySelector('#start-container');
var start = document.querySelector('#start');
var quizContainer = document.querySelector('#quiz');
var questionEl = document.getElementById('question-title');
var choiceContainer = document.getElementById('choices');


var currentQuestionIndex = 0;


// *****  COUNTDOWN  ***** //

// function initialCountdown() {
//     var count = 300;
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


// * * * * * START QUIZ * * * * * //

start.addEventListener("click", startQuiz)

function startQuiz() {
    startContainer.classList.add('hide')
    quizContainer.classList.remove('hide')
    showQuestion();
}


// * * * * * QUESTIONS & ANSWERS * * * * *  //

var questions = [
    {
        question: 'Javascript is an _______ language?',
        choices: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'],
        answer: 'Object-Oriented'
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'Both A and B', 'None of the above'],
        answer: 'Both A and B'
    },
    {
        question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
        choices: ['Throws an error', 'Ignores the statements', 'Gives a warning', 'None of the above'],
        answer: 'Ignores the statements'
    },
    {
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        answer: 'const'
    },
    {
        question: 'What is the use of the <noscript> tag in Javascript?',
        choices: ['The contents are displayed by non-JS-based browsers.', 'Clears all the cookies and cache.', 'Both A and B.', 'None of the above.'],
        answer: 'The contents are displayed by non-JS-based browsers.'
    }
];

var currentQuestion = 0;

function showQuestion() {
    var q = questions[currentQuestion];

    questionEl.textContent = q.question;
    choiceContainer.innerHTML = ''

    for (var i = 0; i < q.choices.length; i++) {
        // create
        var button = document.createElement('button')

        // add
        button.textContent = q.choices[i]
        button.classList.add('btn')

        // append to the html
        choiceContainer.append(button)
    }
    currentQuestion++;

}

choices.addEventListener('click', showQuestion);





// function checkAnswer (answer) {
//     var lineBreak = document.getElementById("lineBreak");
//     lineBreak.style.display = 'block';
//     answerCheck.style.display = 'block';

//     if(questions[currentQuestion].answer === questions[currentQuestion].choices[answer]) {
//         correctAns++;
//         answerCheck.textContent = 'Correct!';
//     } else {
//         answerCheck.textContent = 'Wrong! The correct answer is: ' + questions[currentQuestion.answer;]
//     }
// }
