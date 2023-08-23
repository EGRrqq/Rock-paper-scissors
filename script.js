function playRound(playerSelection, computerSelection) {
  // create conditional statement for these rules:

  // Rock beats scissors and loses to paper
  // Paper beats rock, but loses to scissors
  // Scissors beat paper but loses to rock

  if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "Tie! Try your luck in a new round";
  } else {
    return `You Lose! ${playerSelection} sucks ${computerSelection}`;
  }
}

function getComputerChoice() {
  // initialize an array that contains 3 elements such as "rock", "paper" and "scissors"

  const RockPaperScissors = ["rock", "paper", "scissor"];

  // create a variable that randomly access number between 0 and 2

  const randomNum = Math.floor(Math.random() * 3);

  // access the array elements using this variable in square brackets

  return RockPaperScissors[randomNum];
}

function getUserChoice() {
  // create a variable to store users input
  // use prompt method to store users input
  // use toLowerCase method to make users input case sensitive

  const usersInput = prompt("rock, paper or scissor?").toLowerCase();

  // ignore all user values except rock, paper and scissor

  return usersInput === "rock" ||
    usersInput === "paper" ||
    usersInput === "scissor"
    ? usersInput
    : getUserChoice();
}

const playerSelection = getUserChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));
