function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);
  return (randNum === 1) ? 'rock' :
    (randNum === 2) ? 'paper' :
    'scissors';
}

function capitalizeFirstLetter(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

function toggleVisibility(elem, displayStyle) {
  if (elem.style.display === 'none') {
    elem.style.display = `${displayStyle}`;
  } else {
    elem.style.display = 'none';
  }
}

function playRound(playerChoice) {  
  const compChoice = getComputerChoice();
  let result = '';
  const choices = ['rock', 'paper', 'scissors'];

  if ((choices.indexOf(playerChoice) + 1) % 3 === choices.indexOf(compChoice)) {
    compScore++;
    result = `You lose. ${capitalizeFirstLetter(compChoice)} beats ${capitalizeFirstLetter(playerChoice)}.`;
  } else if (choices.indexOf(playerChoice) === choices.indexOf(compChoice)) {
    result = `Tie!`;
  } else {
    playerScore++;
    result = `You win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(compChoice)}.`;
  }

  currentRound++;
  roundNum.textContent = `Round ${currentRound}`;
  roundResult.textContent = result;
  playerScoreDiv.textContent = `Your score: ${playerScore}`;
  compScoreDiv.textContent = `Computer Score: ${compScore}`;

  const gameWinner = checkGameWinner();
  if (gameWinner) {
    startBtn.textContent = 'Play again';
    toggleVisibility(startBtn, 'inline');
    gameButtons.forEach(button => toggleVisibility(button, 'none'));
    gameResult.textContent = gameWinner;
  }
}

function checkGameWinner() {
  return (playerScore === 5) ? 'You won the game!' :
  (compScore === 5) ? 'You lost the game.' :
  undefined;
}

function resetCounters() {
  compScore = 0;
  playerScore = 0;
  currentRound = 0;
}

function clearText() {
  roundNum.textContent = '';
  roundResult.textContent = '';
  playerScoreDiv.textContent = '';
  compScoreDiv.textContent = '';
  gameResult.textContent = '';
}

const startBtn = document.querySelector('.start');
const gameButtons = document.querySelectorAll('#game-button');
const roundNum = document.querySelector('.round-num');
const playerScoreDiv = document.querySelector('.player-score');
const compScoreDiv = document.querySelector('.comp-score');
const roundResult = document.querySelector('.round-result');
const gameResult = document.querySelector('.game-result');

let compScore = 0;
let playerScore = 0;
let currentRound = 0;

startBtn.addEventListener('click', () => {
  resetCounters();
  clearText();
  gameButtons.forEach(button => toggleVisibility(button, 'inline'));
  toggleVisibility(startBtn, 'none');
});

gameButtons.forEach(button => button.addEventListener('click', () => {  
    playRound(button.className);
}));
