//VARIABLES
let q1 = document.getElementById('question1');
let q2 = document.getElementById('question2');
let q3 = document.getElementById('question3');
let q4 = document.getElementById('question4');
let q5 = document.getElementById('question5');
let q6 = document.getElementById('question6');
let q7 = document.getElementById('question7');
let q8 = document.getElementById('question8');
let q9 = document.getElementById('question9');
let q10 = document.getElementById('question10');

    //Bouton "Question suivante" / Validation
    let nextQuestion1 = document.getElementById("next-question1");
    let nextQuestion2 = document.getElementById("next-question2");
    let nextQuestion3 = document.getElementById("next-question3");
    let nextQuestion4 = document.getElementById("next-question4");
    let nextQuestion5 = document.getElementById("next-question5");
    let nextQuestion6 = document.getElementById("next-question6");
    let nextQuestion7 = document.getElementById("next-question7");
    let nextQuestion8 = document.getElementById("next-question8");
    let nextQuestion9 = document.getElementById("next-question9");
    let nextQuestion10 = document.getElementById("next-question10");


//Compteurs de bonnes / mauvaises réponses
let goodAnswers = [];
let wrongAnswers = [];

//EVENT LISTENERS
nextQuestion1.addEventListener('click', validateQ1);
nextQuestion2.addEventListener('click', validateQ2);
nextQuestion3.addEventListener('click', validateQ3);
nextQuestion4.addEventListener('click', validateQ4);
nextQuestion5.addEventListener('click', validateQ5);
nextQuestion6.addEventListener('click', validateQ6);
nextQuestion7.addEventListener('click', validateQ7);
nextQuestion8.addEventListener('click', validateQ8);
nextQuestion9.addEventListener('click', validateQ9);
/*nextQuestion10.addEventListener('click', validateQ10)*/;

//FONCTIONS
function validateQ1() {
    let q1 = document.getElementById('q1').value;

    if (q1 === 'Paris' || q1 === 'paris') {
        alert ('Bonne réponse!');
        console.log('Bonne réponse');
        goodAnswers.length++;
        console.log(goodAnswers.length + ' bonne(s) réponse(s)');
    } else if (q1 === '') {
        alert('Faites un effort, essayez au moins de répondre...');
    } else {
        alert ('Mauvaise réponse! La bonne réponse était Paris.');
        console.log('Mauvaise réponse');
        wrongAnswers.length++;
        console.log(wrongAnswers.length + ' Mauvaise(s) réponse(s)');
}
}

function validateQ2() {
    let q2 = document.getElementById('q2').value;

    if (q2 === 'Londres' || q2 === 'londres') {
        alert ('Bonne réponse!');
        console.log('Bonne réponse');
        goodAnswers.length++;
        console.log(goodAnswers.length + ' bonne(s) réponse(s)');
    } else if (q2 === '') {
        alert('Faites un effort, essayez au moins de répondre...');
    } else {
        alert ('Mauvaise réponse! La bonne réponse était Londres.');
        console.log('Mauvaise réponse');
        wrongAnswers.length++;
        console.log(wrongAnswers.length + ' Mauvaise(s) réponse(s)');
}
}

function validateQ3() {
    let q3 = document.getElementById('q3').value;

    if (q3 === 'Rome' || q3 === 'rome') {
        alert ('Bonne réponse!');
        console.log('Bonne réponse');
        goodAnswers.length++;
        console.log(goodAnswers.length + ' bonne(s) réponse(s)');
    } else if (q3 === '') {
        alert('Faites un effort, essayez au moins de répondre...');
    } else {
        alert ('Mauvaise réponse! La bonne réponse était Rome.');
        console.log('Mauvaise réponse');
        wrongAnswers.length++;
        console.log(wrongAnswers.length + ' Mauvaise(s) réponse(s)');
}
}

function validateQ4() {
    let q4 = document.getElementById('q4').value;

    if (q4 === 'Tokyo' || q4 === 'tokyo') {
        alert ('Bonne réponse!');
        console.log('Bonne réponse');
        goodAnswers.length++;
        console.log(goodAnswers.length + ' bonne(s) réponse(s)');
    } else if (q4 === '') {
        alert('Faites un effort, essayez au moins de répondre...');
    } else {
        alert ('Mauvaise réponse! La bonne réponse était Tokyo.');
        console.log('Mauvaise réponse');
        wrongAnswers.length++;
        console.log(wrongAnswers.length + ' Mauvaise(s) réponse(s)');
}
}

function validateQ5() {
    let q5 = document.getElementById('q5').value;

    if (q5 === 'Reykjavik' || q5 === 'reykjavik') {
        alert ('Bonne réponse!');
        console.log('Bonne réponse');
        goodAnswers.length++;
        console.log(goodAnswers.length + ' bonne(s) réponse(s)');
    } else if (q5 === '') {
        alert('Faites un effort, essayez au moins de répondre...');
    } else {
        alert ('Mauvaise réponse! La bonne réponse était Reykjavik.');
        console.log('Mauvaise réponse');
        wrongAnswers.length++;
        console.log(wrongAnswers.length + ' Mauvaise(s) réponse(s)');
}
}

function validateQ6() {
    let q6 = document.getElementById('q6').value;

    if (q6 === '1776') {
        alert ('Bonne réponse!');
        console.log('Bonne réponse');
        goodAnswers.length++;
        console.log(goodAnswers.length + ' bonne(s) réponse(s)');
    } else if (q6 === '') {
        alert('Faites un effort, essayez au moins de répondre...');
    } else {
        alert ('Mauvaise réponse! La bonne réponse était 1776.');
        console.log('Mauvaise réponse');
        wrongAnswers.length++;
        console.log(wrongAnswers.length + ' Mauvaise(s) réponse(s)');
}
}

function validateQ7() {
    let q7 = document.getElementById('q7').value;

    if (q7 === '1950') {
        alert ('Bonne réponse!');
        console.log('Bonne réponse');
        goodAnswers.length++;
        console.log(goodAnswers.length + ' bonne(s) réponse(s)');
    } else if (q7 === '') {
        alert('Faites un effort, essayez au moins de répondre...');
    } else {
        alert ('Mauvaise réponse! La bonne réponse était 1950.');
        console.log('Mauvaise réponse');
        wrongAnswers.length++;
        console.log(wrongAnswers.length + ' Mauvaise(s) réponse(s)');
}
}

function validateQ8() {
    let q8 = document.getElementById('q8').value;

    if (q8 === '1986') {
        alert ('Bonne réponse!');
        console.log('Bonne réponse');
        goodAnswers.length++;
        console.log(goodAnswers.length + ' bonne(s) réponse(s)');
    } else if (q8 === '') {
        alert('Faites un effort, essayez au moins de répondre...');
    } else {
        alert ('Mauvaise réponse! La bonne réponse était 1986.');
        console.log('Mauvaise réponse');
        wrongAnswers.length++;
        console.log(wrongAnswers.length + ' Mauvaise(s) réponse(s)');
}
}

function validateQ9() {
    let q9 = document.getElementById('q9').value;

    if (q9 === '2002') {
        alert ('Bonne réponse!');
        console.log('Bonne réponse');
        goodAnswers.length++;
        console.log(goodAnswers.length + ' bonne(s) réponse(s)');
    } else if (q9 === '') {
        alert('Faites un effort, essayez au moins de répondre...');
    } else {
        alert ('Mauvaise réponse! La bonne réponse était 2002.');
        console.log('Mauvaise réponse');
        wrongAnswers.length++;
        console.log(wrongAnswers.length + ' Mauvaise(s) réponse(s)');
}
}

function validateQ10() {
    let q10 = document.getElementById('q10').value;

    if (q10 === '2017') {
        alert ('Bonne réponse!');
        console.log('Bonne réponse');
        goodAnswers.length++;
        console.log(goodAnswers.length + ' bonne(s) réponse(s)');
    } else if (q10 === '') {
        alert('Faites un effort, essayez au moins de répondre...');
    } else {
        alert ('Mauvaise réponse! La bonne réponse était 2017.');
        console.log('Mauvaise réponse');
        wrongAnswers.length++;
        console.log(wrongAnswers.length + ' Mauvaise(s) réponse(s)');
}
}

function nextQuestionOne() {
    console.log("Question suivante");
    q1.style.display = "none";
    q2.style.display = "block";
}

function nextQuestionTwo() {
    console.log("Question suivante");
    q2.style.display = "none";
    q3.style.display = "block";
}

function nextQuestionThree() {
    console.log("Question suivante");
    q3.style.display = "none";
    q4.style.display = "block";
}

function nextQuestionFour() {
    console.log("Question suivante");
    q4.style.display = "none";
    q5.style.display = "block";
}

function nextQuestionFive() {
    console.log("Question suivante");
    q5.style.display = "none";
    q6.style.display = "block";
}

function nextQuestionSix() {
    console.log("Question suivante");
    q6.style.display = "none";
    q7.style.display = "block";
}

function nextQuestionSeven() {
    console.log("Question suivante");
    q7.style.display = "none";
    q8.style.display = "block";
}

function nextQuestionEight() {
    console.log("Question suivante");
    q8.style.display = "none";
    q9.style.display = "block";
}

function nextQuestionNine() {
    console.log("Question suivante");
    q9.style.display = "none";
    q10.style.display = "block";
}

function endQuiz() {
    alert ('Quiz terminé! Vous avez ' + goodAnswers.length + ' bonne(s) réponse(s) et ' + wrongAnswers.length + ' mauvaise(s) réponse(s). Félicitations!');
    console.log(goodAnswers.length + ' bonne(s) réponse(s) et ' + wrongAnswers.length + ' mauvaise(s) réponse(s).');
    console.log('Quiz terminé');

    if (goodAnswers.length == 0) {
        alert ("Vous n'avez aucune bonne réponse! Faites un effort...");
    } else if (goodAnswers.length > 0 && goodAnswers.length < 5) {
        alert ("Vous n'avez pas réalisé une très grande performance... Vous ferez mieux la prochaine fois!");
    } else if (goodAnswers.length > 5 && goodAnswers.length < 10) {
        alert ("Belle performance! Réessayez et tentez de faire un sans faute!");
    } else {
        alert ("Sans faute! Quel crack!");
    }
}