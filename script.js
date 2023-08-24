function game(rounds = 5) {
  // create a loop that runs the playRound function 5 times
  // also add the score to return value

  for (let i = 0; i < rounds; i++) {
    let result = playRound();
    console.log(result, "\n", scoreCounter(result));
  }
}

function playRound() {
  // create conditional statement for these rules:

  // Rock beats scissors and loses to paper
  // Paper beats rock, but loses to scissors
  // Scissors beat paper but loses to rock

  const playerSelection = getUserChoice();
  const computerSelection = getComputerChoice();

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

const score = {
  playerScore: 0,
  computerScore: 0,
};

function scoreCounter(result) {
  if (result.includes("Win")) {
    score.playerScore++;
  } else if (result.includes("Lose")) {
    score.computerScore++;
  }

  return `your score is ${score.playerScore} ${score.computerScore}`;
}

console.log(game(5));
