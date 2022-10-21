//VARIABLES 

//BOUTONS

//Question 1 
let q1a = document.getElementById("q1a");
let q1b = document.getElementById("q1b");
let q1c = document.getElementById("q1c");
let q1d = document.getElementById("q1d");

//Question 2
let q2a = document.getElementById("q2a");
let q2b = document.getElementById("q2b");
let q2c = document.getElementById("q2c");
let q2d = document.getElementById("q2d");

//Question 3
let q3a = document.getElementById("q3a");
let q3b = document.getElementById("q3b");
let q3c = document.getElementById("q3c");
let q3d = document.getElementById("q3d");

//Question 4
let q4a = document.getElementById("q4a");
let q4b = document.getElementById("q4b");
let q4c = document.getElementById("q4c");
let q4d = document.getElementById("q4d");

//Question 5
let q5a = document.getElementById("q5a");
let q5b = document.getElementById("q5b");
let q5c = document.getElementById("q5c");
let q5d = document.getElementById("q5d");

//Question 6
let q6a = document.getElementById("q6a");
let q6b = document.getElementById("q6b");
let q6c = document.getElementById("q6c");
let q6d = document.getElementById("q6d");

//Question 7
let q7a = document.getElementById("q7a");
let q7b = document.getElementById("q7b");
let q7c = document.getElementById("q7c");
let q7d = document.getElementById("q7d");

//Question 8
let q8a = document.getElementById("q8a");
let q8b = document.getElementById("q8b");
let q8c = document.getElementById("q8c");
let q8d = document.getElementById("q8d");

//Question 9
let q9a = document.getElementById("q9a");
let q9b = document.getElementById("q9b");
let q9c = document.getElementById("q9c");
let q9d = document.getElementById("q9d");

//Question 10
let q10a = document.getElementById("q10a");
let q10b = document.getElementById("q10b");
let q10c = document.getElementById("q10c");
let q10d = document.getElementById("q10d");

//COMPTEUR DE BONNES / MAUVAISES REPONSES
let goodAnswers = [];
let wrongAnswers = [];


//FONCTIONS

//Fonction bonne réponse
function goodAnswer() {
    alert('Bonne réponse!');
    console.log('Réponse correcte');
    goodAnswers.length++;
    console.log(goodAnswers.length + ' bonne(s) réponse(s)');
};

//Fonction mauvaise réponse
function wrongAnswer() {
    alert('Mauvaise réponse!');
    console.log('Réponse erronnée');
    wrongAnswers.length++;
    console.log(wrongAnswers.length + ' mauvaise(s) réponse(s)');
};

//Fonction Quiz Terminé
function quizOver() {
    alert('Quiz terminé! vous avez ' + goodAnswers.length + ' bonnes réponses et ' + wrongAnswers.length + ' mauvaises réponses. Félicitations!')
    console.log('Quiz terminé');
};

//EVENT LISTENERS

//Bonnes réponses
q1d.addEventListener('click', goodAnswer);
q2a.addEventListener('click', goodAnswer);
q3c.addEventListener('click', goodAnswer);
q4b.addEventListener('click', goodAnswer);
q5a.addEventListener('click', goodAnswer);
q6b.addEventListener('click', goodAnswer);
q7d.addEventListener('click', goodAnswer);
q8c.addEventListener('click', goodAnswer);
q9a.addEventListener('click', goodAnswer);
q10d.addEventListener('click', goodAnswer);
q10d.addEventListener('click', quizOver);

//Mauvaises réponses
q1a.addEventListener('click', wrongAnswer);
q1b.addEventListener('click', wrongAnswer);
q1c.addEventListener('click', wrongAnswer);

q2b.addEventListener('click', wrongAnswer);
q2c.addEventListener('click', wrongAnswer);
q2d.addEventListener('click', wrongAnswer);

q3a.addEventListener('click', wrongAnswer);
q3b.addEventListener('click', wrongAnswer);
q3d.addEventListener('click', wrongAnswer);

q4a.addEventListener('click', wrongAnswer);
q4c.addEventListener('click', wrongAnswer);
q4d.addEventListener('click', wrongAnswer);

q5b.addEventListener('click', wrongAnswer);
q5c.addEventListener('click', wrongAnswer);
q5d.addEventListener('click', wrongAnswer);

q6a.addEventListener('click', wrongAnswer);
q6c.addEventListener('click', wrongAnswer);
q6d.addEventListener('click', wrongAnswer);

q7a.addEventListener('click', wrongAnswer);
q7b.addEventListener('click', wrongAnswer);
q7c.addEventListener('click', wrongAnswer);

q8a.addEventListener('click', wrongAnswer);
q8b.addEventListener('click', wrongAnswer);
q8d.addEventListener('click', wrongAnswer);

q9b.addEventListener('click', wrongAnswer);
q9c.addEventListener('click', wrongAnswer);
q9d.addEventListener('click', wrongAnswer);

q10a.addEventListener('click', wrongAnswer);
q10b.addEventListener('click', wrongAnswer);
q10c.addEventListener('click', wrongAnswer);

q10a.addEventListener('click', quizOver);
q10b.addEventListener('click', quizOver);
q10c.addEventListener('click', quizOver);