// console.log("Hello World!");

let playerChoice = prompt("Rock, Paper, or Scissors?");

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  switch (computerChoice) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}

function startGame(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a Tie! Both players chose " + playerSelection;
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  } else {
    return "You win! " + playerChoice + " beats " + computerSelection;
  }
}

console.log(startGame(playerChoice, getComputerChoice()));
