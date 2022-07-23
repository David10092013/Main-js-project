let userChoice = prompt(' make your choice!', 'rock', 'paper', 'scissors');
console.log('user choice:' + userChoice);
let zeroOrOneOrTwo;

let userScore = 0;
let computerScore = 0;

function computerPlay() {
  let zeroOrOneOrTwo = Math.floor(Math.random() * 3);

  if (zeroOrOneOrTwo === 1) {
    computerPlay = 'rock';
  } else if (zeroOrOneOrTwo === 2) {
    computerPlay = 'paper';
  } else {
    computerPlay = 'scissors';
  }
}

computerPlay();

console.log('-> computer choice: ' + computerPlay);

function winner(userChoice, computerPlay) {
  if (userChoice === computerPlay) {
    return " It's a tie";
  } else if (userChoice === 'rock') {
    if (computerPlay === 'paper') {
      computerScore++;
       console.log("Computer score ->" + computerScore   +  "User score ->" +  userScore);
      return 'You lose. Paper beats rock!';
    } else {
      userScore++;
      console.log("Computer score ->" + computerScore  +  "User score ->" +  userScore);
      return 'You won. Rock beats scissors';
    }
  } else if (userChoice === 'scissors') {
    if (computerPlay === 'rock') {
      computerScore++;
       console.log("Computer score ->" + computerScore  +  "User score ->" +  userScore);
      return 'You lose. Rock beats scissors!';
    } else {
      userScore++;
       console.log("Computer score ->" + computerScore  +  "User score ->" +  userScore);
      return 'You won. Scissors beats paper!';
    }
  } else if (userChoice === 'paper') {
    if (computerPlay === 'scissors') {
      computerScore++;
       console.log("Computer score ->" + computerScore  +  "User score ->" +  userScore);
      return 'You lose. Scissors beats paper!';
    } else {
      userScore++;
       console.log("Computer score ->" + computerScore +  "User score ->"  +  userScore);
      return 'You won. Paper beats Rock!';
    }
  }
}








let winnerResult = winner(userChoice, computerPlay);
console.log('-> game result: ' + winnerResult);