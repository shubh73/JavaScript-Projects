const quizData = [
    {
        question: "How old is Shubh Porwal?",
        a: "23",
        b: "19",
        c: "22",
        d: "18",
        correct: "b"
    },{
        question: "Which is the most used programming language in 2021?",
        a: "Java",
        b: "Python",
        c: "C",
        d: "JavaScript",
        correct: "d"
    },{
        question: "Who is the President of India?",
        a: "Narendra Modi",
        b: "Pranab Mukherjee",
        c: "Ram Nath Kovind",
        d: "Shubh Porwal",
        correct: "c"
    },{
        question: "What does SASS stand for?",
        a: "Sassy Awesome Cascading Style Sheets",
        b: "Cascading Style Sheets",
        c: "Syntactically Awesome Style Sheets",
        d: "Software as a System",
        correct: "c"
    },{
        question: "In which year was JavaScript launched?",
        a: "1990",
        b: "1995",
        c: "1996",
        d: "none of the above",
        correct: "b"
    }
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick = "location.reload();">Reload</button>`;
        }
    }
});