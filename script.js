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