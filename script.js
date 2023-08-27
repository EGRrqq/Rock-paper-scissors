const main = document.querySelector("main");
const p = document.createElement("p");
const h2 = document.createElement("h2");
const score = {
  playerScore: 0,
  computerScore: 0,
};

function playRound() {
  const playButtons = document.querySelectorAll(".btn-choice");

  playButtons.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      let playerSelection = btn.innerText.toLowerCase();
      let computerSelection = getComputerChoice();

      if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
      ) {
        showResult(`You Win! ${playerSelection} beats ${computerSelection}`);
        showScore();
      } else if (playerSelection === computerSelection) {
        showResult("Tie! Try your luck in a new round");
        showScore();
      } else {
        showResult(`You Lose! ${playerSelection} sucks ${computerSelection}`);
        showScore();
      }
    })
  );
}

playRound()

function showResult(textContent) {
  p.textContent = textContent;

  main.appendChild(p);
}

function showScore() {
  let results = document.querySelectorAll("p");
  let lastResults = results[results.length - 1].innerText;

  if (lastResults.includes("Win")) {
    score.playerScore++;
  } else if (lastResults.includes("Lose")) {
    score.computerScore++;
  }

  h2.textContent = `your score is ${score.playerScore} ${score.computerScore}`;
  main.appendChild(h2);
}

function getComputerChoice() {
  const RockPaperScissors = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);

  return RockPaperScissors[randomNum];
}
