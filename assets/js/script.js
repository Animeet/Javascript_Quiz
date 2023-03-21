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




var countDown = document.querySelector('.count-down');
var startContainer = document.querySelector('#start-container');
var endContainer = document.querySelector('#quiz-end');
var start = document.querySelector('#start');
var quizContainer = document.querySelector('#quiz');
var score = document.querySelector('#score')

var questionEl = document.getElementById('question-title');
var choiceContainer = document.getElementById('choices');

var currentQuestion = 0;
var correctAns = 0;
var count = 300;
var score_count = 0;

var highscores = JSON.parse(localStorage.getItem('scores')) || []

// * * * * * STORE Questions & Choices * * * * *  //

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


// * * * * * START QUIZ * * * * * //


function startQuiz() {
    startContainer.classList.add('hide')
    quizContainer.classList.remove('hide')
    startTimer();
    showQuestion();
}


// *****  COUNTDOWN  ***** //

function startTimer() {
    countDown.innerText = 300

    var timer = setInterval(function () {
        count--;
        countDown.innerText = count;

        if (count === 0) {
            clearInterval(timer)
        }
    }, 1000)
}


// * * * * * SHOW Questions & Choices* * * * *  //


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
        button.addEventListener("click", eventHandler)

        // append to the html
        choiceContainer.append(button)
    }
}

start.addEventListener("click", startQuiz)


// * * * * * CHECK IF ANSWER IS CORRECT OR INCORRECT * * * * * //

function eventHandler(event) {

    if (questions[currentQuestion].answer === event.target.textContent) {
        score_count += 25;
    } else {
        count -= 10;
    }

    currentQuestion++;
    if (currentQuestion == 5) {
        endContainer.classList.remove('hide')
        quizContainer.classList.add('hide')
        score.innerText = score_count;
    } else {
        showQuestion()
    }
}

function submitScore() {
    // create intials variable to store the value of the input from the front end

    var scoreObj = {
        score: score,
        userInitials: ""
    }

    highscores.push(scoreObj)
    localStorage.setItem('scores', JSON.stringify(highscores))

}
submitScore();

function highscoreInformation() {
    //pull the information from localStorage

    //createElement ol for the li's that'll store the information
    var ol = document.createElement('ol');
    //create a for loop that continuosly places information to the li's
    for (var i = 0; i < highscores.length; i++) {
        //createElement li's for the localStorage information to be stored
        var li = document.createElement('li');
        //place the information inside of li's
        li.textContent = highscores[i].userInitials + ' - ' + highscores[i].score
        //After the information is placed, append the li's to the ol's
        ol.append(li)
    }
    document.querySelector('#highscores').append(ol);

// append the ol to the html

}
highscoreInformation()
