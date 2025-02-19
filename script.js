`use strict`;
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message){
    document.querySelector
    (`.message`).textContent = message;
};

const displayNumber = function (number) {
    document.querySelector(`.number`).textContent = number;
}

const displayScore = function (score) {
    document.querySelector(`.score`).textContent = score;
}

document.querySelector(`.check`).addEvenListener(`click`), function () {
const guess = Number(document.querySelector(`.guess`).value);
}

// when there is no input
if (!guess) {
    displayMessage(`No number!`);
    // when player wins
} else if (guess===secretNumber) {
    displayMessage(`Correct Number!`);
    displayNumber(secretNumber)
}

if (score > highscore) {
    highscore = score;
    document.querySelector(`.highscore`).textContent = highscore;
}

{document.querySelector(`body`).style.backgroundColor = `#60b347`;
document.querySelector(`.number`).style.with = `30rem`;
// when guess is wrong
} elseif (guess!== secretNumber)
{
    if (score > 1) {
        displayMessage(guess>secretNumber?`Too high`:`Too low!`);
        score--;
        displayScore(score);
    } else {
        displayMessage(`you lost the game!`);
        displayScore(0);
        displayNumber(secretNumber);
        document.querySelector(`body`).style.backgroundColor = `#FF0000`;
        // change bachground to red on loss
    }
};

document.querySelector(`.again`).addEventListener(`click`, funtion())
{
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayScore(score);
    displayNumber(`?`);
    displayMessage(`Start guessing...`);
    document.querySelector(`.guess`).value="";
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
}


