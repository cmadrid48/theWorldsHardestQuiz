// Selecting all elements
var startBtn = document.querySelector('.startBtn button');
var infoBox = document.querySelector('.infoBox');
var exitBtn = infoBox.querySelector('.beginButtons .quit');
var continueBtn = infoBox.querySelector('.beginButtons .continue');
var quizBox = document.querySelector(".quizBox")
var nextBtn = quizBox.querySelector('.nextBtn');
var resultBox = document.querySelector('.resultBox');
var restartQuiz = resultBox.querySelector('.buttons .restart');
var quitQuiz = resultBox.querySelector('.buttons .quit');
var totalQuestions = 0;
var questionNumber = 1;
var questionList = document.querySelector('.questionList');
var timeCount = quizBox.querySelector('.timer .timerSec');


// if "startBtn" is clicked iniate quiz
// This will open Rules

startBtn.onclick = ()=> {
    infoBox.classList.add("activeInfo");
}

// if "startBtn" is clicked iniate quiz
// takes user back to start button
exitBtn.onclick = ()=> {
    infoBox.classList.remove("activeInfo");
}

continueBtn.onclick = ()=> {
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add('activeQuiz');
    showQuestions(0);
    questionCounter(1);
    startTimer(15);
}



nextBtn.onclick = () => {
    if(totalQuestions < questions.length - 1){
        totalQuestions++;
        questionNumber++;
        showQuestions(totalQuestions);
        questionCounter(questionNumber);
        clearInterval(counter);
        startTimer(timerValue);
        nextBtn.style.display = 'none';

    } else {
        console.log('Questions Complete');
        showResultbox();
    }
}


//passing questions and applicable data from aRRAY
function showQuestions(index) {
    var question = document.querySelector('.question');
    
    var queTag = '<span>' + questions[index].question + '</span>';
    var optionTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    question.innerHTML = queTag;
    questionList.innerHTML = optionTag;

    var option = questionList.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    clearInterval(counter);
    var userAnswer = answer.textContent;
    var correctAnswer = questions[totalQuestions].answer;
    var allOptions = questionList.children.length;
    if(userAnswer == correctAnswer) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add('correct');
        console.log('answer right!');
    }else {
        answer.classList.add('wrong')
        console.log('wronnnggggg!');

        for (let i = 0; i < allOptions; i++) {
            if(questionList.children[i].textContent == correctAnswer) {
                questionList.children[i].setAttribute("class", "option correct");
            }
        }
    }

//locks selections after user selection
    for (let i = 0; i < allOptions; i++) {
        questionList.children[i].classList.add('disabled');
    }
    nextBtn.style.display = 'block';
}



var userScore = 0;



function showResultbox () {
    infoBox.classList.remove("activeInfo");
    quizBox.classList.remove('activeQuiz');
    resultBox.classList.add('activeResult');
    var scoreText = resultBox.querySelector('.scoreText');
    if(userScore > 3){
        var scoreTag = '<span>wow, you got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        var scoreTag = '<span>you got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        var scoreTag = '<span>dang, you only got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }

}




var counter;
var timerValue = 15;

function startTimer (time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = '00';
        }
    }
}



function questionCounter(index){
    var quesCount = quizBox.querySelector('.totalQuestions');
    var totalCount = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    quesCount.innerHTML = totalCount;
}









var questions = [
    {
        numb: 1,
        question:"Commonly used data types DO NOT include.", // index0
        answer: "alerts",
        options: ["strings", "booleans", "alerts", "numbers"]
    },
    {
        numb: 2,
        question:"The condition in an if / else statement is enclosed within ____.", //index 1
        answer: "parentheses",
        options: ['quotes', 'curly brackets', 'parentheses', 'square brackets']
    },
    {
        numb: 3,
        question:"Arrays in JavaScript can be used to store ____.", //index 2
        answer: "all of the above",
        options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above']    
    },
    {
        numb: 4,
        question:"String values must be enclosed within ____ when being assigned to variables.", //index 3
        answer: "quotes",
        options: ['commas', 'curly brackets', 'quotes', 'parentheses']
    },
    {
        numb: 5,
        question:"A very useful tool used during development and debugging for printing content to the debugger is:", //index 4
        answer: "console.log",
        options: ['JavaScript', 'terminal / bash', 'for loops', 'console.log']
    },
];

// list of all questions, choices, and answers
