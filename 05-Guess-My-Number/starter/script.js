'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;


// Game Logic
document.querySelector('.check').addEventListener('click', function () {
  // parsing user entry
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when no imput
  if (!guess) {
    // document.querySelector('.message').textContent = 'NO Number!';
    displayMessage('Invalid entry!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is different than secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again BTN functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start Guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});


// display message function 
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}