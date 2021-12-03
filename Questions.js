const quizData = [
    {
        question: "Q.1 Which is the capital of india ?",
        a: "Chennai",
        b: "banglore",
        c: "mumbai",
        d: "delhi",
        correct: "d",
    },
    {
        question: "Q.2 Which is the financial capital of india ?",
        a: "Delhi",
        b: "Mumbai",
        c: "Hyderabad",
        d: "Kolkatta",
        correct: "b",
    },
    {
        question: "Q.3 Which is the National Bird of india ?",
        a: "Peacock",
        b: "Penguin",
        c: "Eagle",
        d: "owl",
        correct: "a",
    },
    {
        question: "Q.4 Who won the most IPL Titles tillk now ?",
        a: "CSK",
        b: "MI",
        c: "RCB",
        d: "SHYD",
        correct: "b",
    },
    {
        question: "Q.5 Who won the world cup in 2011 ??",
        a: "India",
        b: "AUSTRALIA",
        c: "ENGLAND",
        d: "BANGLADESH",
        correct: "a",
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly </h2>`
        }
    }
})
// quiz.innerHTML = text + " " + "- searched on" + " " + moment().format('LTS')
{/* <button onclick="location.reload()">Reload</button> */}