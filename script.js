function getComputerChoice() {
  // Generate random number between one and three
  let randNum = Math.floor(Math.random() * 3) + 1;
  
  return (randNum === 1) ? 'rock' :
    (randNum === 2) ? 'paper' :
    'scissors';
}

function getPlayerChoice() {
  // Initialize our choice variable as an empty string
  let choice = '';
  // Loop until player enters a valid input
  while (!choice) {
    // Get player input and convert it to lowercase
    choice = prompt('Choose Rock, Paper or Scissors').toLowerCase();
    // Remove whitespaces from start and end of string
    choice = choice.trim();
    
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
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
  let maxRounds = parseInt(prompt('How many rounds would you like to play?'));
  // Loop as many times as maxRounds, calling the playRounds function each time
  for (i = 1; i <= maxRounds; i++) {
    let currentRound = playRound(getPlayerChoice(i, maxRounds), getComputerChoice());
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

game();
