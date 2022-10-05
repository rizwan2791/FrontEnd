const quizData = [
    {
        question: "Which Game is developed by Rockstar Games ?",
        a: "GTA V",
        b: "Deadpool",
        c: "Sim City",
        d: "Assasin creed Origins",
        correct: "a",
    },
    {
        question: "What is capital of India ? ",
        a: "Maharashtra",
        b: "Delhi",
        c: "Rajasthan",
        d: "Uttar Pradesh",
        correct: "b",
    },
    {
        question: "Tsunamis are not caused by ? ",
        a: "Hurricanes",
        b: "Earthquakes",
        c: "Undersea landslides",
        d: "Volcanic eruptions",
        correct: "a",
    },
    {
        question: "The metal whose salts are sensitive to light is ? ",
        a: "Zinc",
        b: "Silver",
        c: "Copper",
        d: "Aluminium",
        correct: "b",
    },


];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')
const d_text = document.querySelector('#d_text')
const submitBtn = document.querySelector('#submit')


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
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})