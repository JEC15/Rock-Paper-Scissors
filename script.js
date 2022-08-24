function getComputerChoice() {
  // Generate random number between one and three
  let randNum = Math.floor(Math.random() * 3) + 1;
  
  return (randNum === 1) ? 'rock' :
    (randNum === 2) ? 'paper' :
    'scissors';
}

function getPlayerChoice(round, maxRounds) {
  // Initialize our choice variable as an empty string
  let choice = '';
  // Loop until player enters a valid input
  while (!choice) {
    // Get player input
    choice = getStringFromInput(`Round ${round} of ${maxRounds}
Choose Rock, Paper or Scissors`);
    
    // If input is a valid choice, or player presses "cancel" on prompt
    if (choice === 'rock' || choice === 'paper' || 
      choice === 'scissors' || choice === 'cancelled by player') {
      return choice;
    }
    // If input is an empty string, keep asking for valid input
    if (!choice) {
      alert('You must choose one of Rock, Paper or Scissors!');
    } 
    // If input is not what we're looking for, keep asking for valid input
    else {
      alert('Please choose only one of Rock, Paper or Scissors');
      // Set choice to empty string so we don't exit the loop
      choice = '';
    }
  }
}

function playRound(playerSelection, computerSelection) {
  // If player pressed "cancel" on prompt
  if (playerSelection === 'cancelled by player') {
    return playerSelection;
  }
  // Capitalize first letter of each string
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
  computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
  // We can just compare strings here to get a winner
  return playerSelection < computerSelection ? 
    `You win! ${playerSelection} beats ${computerSelection}!` :
  playerSelection === computerSelection ?
    `Draw!` :
    `You lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  // Player chooses number of rounds to play
  let maxRounds = getMaxRounds();
  // Player cancelled game
  if (maxRounds === 'cancelled by player') {
    return;
  }
  // Loop as many times as maxRounds, calling the playRound function each time
  for (i = 1; i <= maxRounds; i++) {
    let currentRound = playRound(getPlayerChoice(i, maxRounds), getComputerChoice());
    // Player cancelled game
    if (currentRound === 'cancelled by player') {
      return;
    }
    alert(`Round ${i} of ${maxRounds}
${currentRound}`);
    // Increase player scores, or don't do anything if draw
    if (currentRound.startsWith('You win')) {
      playerScore++;
    } else if (currentRound.startsWith('You lose')) {
      computerScore++;
    }
  }
  // Print game results
  if (playerScore > computerScore) {
    alert(`You win the game!\n\nYour score: ${playerScore}
Computer score: ${computerScore}`);
  } else if (computerScore > playerScore) {
    alert(`You lose the game\n\nYour score: ${playerScore}
Computer score: ${computerScore}`);
  } else {
    alert(`Game is draw!\n\nYour score: ${playerScore}
Computer score: ${computerScore}`);
  }
}

function getStringFromInput(promptMessage) {
  let input = prompt(promptMessage);
  // If player presses the cancel button on prompt
  if (input === null) {
    return 'cancelled by player';
  }
  return input.toLowerCase().trim();
}

function getNumberFromInput(promptMessage) {
  let input = '';
  // Loop until we get a valid input
  while (!input) {
    input = prompt(promptMessage);
    // If player pressed the cancel button on prompt
    if (input === null) {
      return 'cancelled by player';
    }
    // Try to convert input to number
    input = parseInt(input);
    // Check that input is a positive finite number
    if (isFinite(input)) {
      return input;
    }
    // If we didn't get a number from input, keep looping
    alert('You must choose a number');
    input = '';
  }
}

function getMaxRounds() {
  let maxRounds = 0;
  // Limit rounds to at least 1 but no more than 20
  while (maxRounds < 1 || maxRounds > 20) {
    maxRounds = getNumberFromInput('How many rounds would you like to play? (min:1/max:20)');
    if ((maxRounds > 0 && maxRounds < 21) || maxRounds === 'cancelled by player') {
      return maxRounds;
    }
    alert('You must choose a number between 1 and 20!');
  }
}

function start() {
  let keepPlaying = true;
  // keep looping until player doesn't want to play anymore
  while (keepPlaying) {
    game();
    let playAgain = '';
    // Ask player if they want to play another game
    while (!playAgain) {
      playAgain = getStringFromInput('Would you like to keep playing?(y/n)');
      // If player doesn't want to keep playing or if they press cancel on prompt
      if (playAgain === 'cancelled by player' ||
      playAgain === 'n' || playAgain === 'no') {
          keepPlaying = false;
          return;
      }
      // If player chooses to keep playing, we exit the loop(keepPlaying is still set to true)
      if (playAgain === 'y' || playAgain === 'yes') {
        continue;
      } else {
      // If player input is invalid, keep asking for input
        alert('Please choose yes or no');
        playAgain = '';
      }
    }
  }
}

start();
