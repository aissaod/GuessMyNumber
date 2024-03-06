'use strict';

let winNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(winNumber);

function hideMessage(msg) {
    document.querySelector('.message').textContent = msg
}

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    hideMessage('Start playing');
    winNumber = Math.trunc(Math.random() * 20) + 1;
})
document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;

    if (guess < 1 || guess > 20) {
        hideMessage('Oups 😞  ! Choose a number between 1 and 20');
    } else if (guess == winNumber) {
        hideMessage('Congraturations 😍 this is a correct Number');
        document.querySelector('.number').textContent = winNumber;
        document.body.style.backgroundColor = '#34CC17';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== winNumber) {
        if (score > 1) {
            hideMessage(guess > winNumber ? 'Too high!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            hideMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});


/*
function getRandomInt() {
    var min = 1
    const max = 20
    var minim = Math.ceil(min);
    var maxim = Math.floor(max);
    return Math.floor(Math.random() * (maxim - minim)) + minim;
}
console.log(getRandomInt())

function testValue() {
    let a = document.getElementById('g').value
}*/