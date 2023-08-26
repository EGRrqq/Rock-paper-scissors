function playRound() {
  // create variable that stores all btns
  const playButtons = document.querySelectorAll(".btn-choice");

  // loop through these variable
  // on each iteration add onClick event listener
  playButtons.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      // pass a function to the event listener that:
      // - retrieve the innerText of the button
      // - make innerText case-insensitive
      // - pass this innerText to 'playerSelection' variable

      let playerSelection = btn.innerText.toLowerCase();
      let computerSelection = getComputerChoice();

      if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
      ) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      } else if (playerSelection === computerSelection) {
        console.log("Tie! Try your luck in a new round");
      } else {
        console.log(`You Lose! ${playerSelection} sucks ${computerSelection}`);
      }
    })
  );
}

console.log(playRound());

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
