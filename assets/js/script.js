const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll())


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'This is a question',
        choice0: 'answer',
        choice1: 'answer',
        choice2: 'answer',
        choice3: 'answer',
        answer: 3,
    },
    {
        question: 'This is a question',
        choice0: 'answer',
        choice1: 'answer',
        choice2: 'answer',
        choice3: 'answer',
        answer: 3,
    },
    {
        question: 'This is a question',
        choice0: 'answer',
        choice1: 'answer',
        choice2: 'answer',
        choice3: 'answer',
        answer: 3,
    },
    {
        question: 'This is a question',
        choice0: 'answer',
        choice1: 'answer',
        choice2: 'answer',
        choice3: 'answer',
        answer: 3,
    },
    {
        question: 'This is a question',
        choice0: 'answer',
        choice1: 'answer',
        choice2: 'answer',
        choice3: 'answer',
        answer: 3,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion ()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e=> {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoices = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}