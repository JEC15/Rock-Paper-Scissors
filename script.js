function getComputerChoice() {
  // Generate random number between one and three
  let randNum = Math.floor(Math.random() * 3) + 1;
  
  return (randNum === 1) ? 'rock' :
    (randNum === 2) ? 'paper' :
    'scissors';
}

