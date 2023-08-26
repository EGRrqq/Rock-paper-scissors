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
  const RockPaperScissors = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);

  return RockPaperScissors[randomNum];
}

function getUserChoice() {
  const usersInput = prompt("rock, paper or scissor?").toLowerCase();

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
