const quiz=[
    {
        Question: "Q1. HTML stands for",
        a: "Hey Text Markup Language",
        b: "HyperText Markup Language",
        c: "HyperText Making Language",
        d: "Hello To My Language",
        ans: "ansb"
    },
    {
        Question: "Q2. How many types of selectors are there in CSS?",
        a: "Two",
        b: "Three",
        C: "Five",
        d: "Four",
        ans: "ansd"
    },
    {
        Question: "Q3. What is the full form of JS?",
        a: "JavaScript",
        b: "Javascript",
        c: "JavaSuper",
        d: "JustScript",
        ans: "ansa"
    },
    {
        Question: "Q4. Which of the following tag is used to insert a newline in HTML body?",
        a: "<br></br>",
        b: "<i></i>",
        c: "<strong></strong>",
        d: "<p></p>",
        ans: "ansa"
    },
    
];
const Question = document.querySelector('.Question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

let QuestionCount = 0;
let score=0;

const loadQues = () => {
    const QuestionList = quiz[QuestionCount];
    Question.innerText = QuestionList.Question;
    option1.innerText = QuestionList.a;
    option2.innerText = QuestionList.b;
    option3.innerText = QuestionList.c;
    option4.innerText = QuestionList.d;
}
loadQues();

const getCheckAnswer = () => {
    let answer;
     answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
       
     });
     return answer;

}
submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer== quiz[QuestionCount].ans){
        score++;
    }

    QuestionCount++;
    if(QuestionCount<quiz.length){
        loadQues();
    }
})