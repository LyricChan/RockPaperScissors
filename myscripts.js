// console.log("Hello World!");
let computerWins = 0;
let playerWins = 0;
const btnRock = document.getElementById("Rock");
const btnPaper = document.getElementById("Paper");
const btnScissors = document.getElementById("Scissors");
// let playerChoice = prompt("R P S?");

btnRock.addEventListener("click", function (e) {
  console.log(e);
});

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a Tie! Both players chose " + playerSelection;
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    computerWins++;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  } else {
    playerWins++;
    return "You win! " + playerSelection + " beats " + computerSelection;
  }
}

function game() {
  if (playerWins < 5 || computerWins < 5) {
    //  playerChoice = prompt("R P S?");
    console.log(
      playRound(playerChoice, getComputerChoice()) +
        " Player wins: " +
        playerWins +
        " Computer wins: " +
        computerWins
    );
  }
}

// debugger;

console.log("Hello world!");
game();
