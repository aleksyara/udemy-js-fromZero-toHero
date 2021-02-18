'use strict';

//Select Elements

//Select section tags
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//Select Inital Score
let score0El = document.getElementById('score--0');
let score1El = document.querySelector('#score--1');
// console.log('typof of score1El', score1El, typeof(score1El));
// Select Current Score
let curScorePl1El = document.getElementById('current--0');
let curScorePl2El = document.getElementById('current--1');
//Select other Elements
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHoldEl = document.querySelector('.btn--hold');

//Set Initiial Conditions:
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0]; //store player 1 score as 0 indx, and plr 2' scores as a 1st indx
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0; //set Player1' socre as 0
  score1El.textContent = 0;
  curScorePl1El.textContent = 0; //reset Current Player1' socres
  curScorePl2El.textContent = 0;

  diceEl.classList.add('hidden');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

//Set Initial

init();

// Roll the dice Buton Functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate Random Number
    let dropDice = Number(Math.trunc(Math.random() * 5) + 1);
    console.log('dropDice Value -->>', dropDice);

    // Display Dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dropDice}.png`;

    // Switch to next Players if dice === 1
    if (dropDice !== 1) {
      //add Dice to the Current Score
      currentScore += dropDice;

      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      // curScorePl1El.textContent = currentScore; //Change Later
    } else {
      //Switch
      switchPlayer();
    }
  }
});

//HOLD Button functionality
btnHoldEl.addEventListener('click', function () {
  if (playing) {
    //add current score to the active player's socre
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if score 100
    if (scores[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch player
      switchPlayer();
    }
  }
});

//NEW GAME Button Funcionality

btnNew.addEventListener('click', init);

//Helper function Switch
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log('this is active PLayer', activePlayer);
  player0El.classList.toggle('player--active'); //.toggle will add Class if it's not there and remove it if it's there
  player1El.classList.toggle('player--active');
};

