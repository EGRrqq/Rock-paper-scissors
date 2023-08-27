const playButtons = document.querySelectorAll(".btn-choice");
const main = document.querySelector("main");

const game = {
  player: {
    choice: "",
    score: 0,
  },
  computer: {
    choice: "",
    score: 0,
  },
};

(function play() {
  getPlayerChoice();
  getComputerChoice();
  countScore(isPlayerWin);
  showResult(isPlayerWin);
  showScore();
  showWinner();
})();

function showWinner() {
  const h1 = document.createElement("h1");

  playButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (game.player.score === 5) {
        h1.textContent = "player win";
        disableButtons();
      } else if (game.computer.score === 5) {
        h1.textContent = "computer win";
        disableButtons();
      }
    });
  });

  main.prepend(h1);
}

function disableButtons() {
  playButtons.forEach((btn) => {
    btn.setAttribute("disabled", true);
  });
}

function showScore() {
  const h2 = document.createElement("h2");

  playButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      h2.textContent = `${game.player.score} - ${game.computer.score}`;
    });
  });

  main.appendChild(h2);
}

function showResult(isPlayerWin) {
  const p = document.createElement("p");

  playButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (isPlayerWin(game.player.choice, game.computer.choice) === true) {
        p.textContent = `You Win! ${game.player.choice} beats ${game.computer.choice}`;
      } else if (
        isPlayerWin(game.player.choice, game.computer.choice) === false
      ) {
        p.textContent = `You Lose! ${game.player.choice} sucks ${game.computer.choice}`;
      } else {
        p.textContent = "Tie! Try your luck in a new round";
      }
    });
  });

  main.appendChild(p);
}

function countScore(isPlayerWin) {
  playButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (isPlayerWin(game.player.choice, game.computer.choice) === true) {
        game.player.score++;
      } else if (
        isPlayerWin(game.player.choice, game.computer.choice) === false
      ) {
        game.computer.score++;
      }
    });
  });
}

function isPlayerWin(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return true;
  } else if (playerSelection === computerSelection) {
    return "Tie";
  } else {
    return false;
  }
}

function getPlayerChoice() {
  playButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const playerSelection = btn.innerText.toLowerCase();
      game.player.choice = playerSelection;
    });
  });
}

function getComputerChoice() {
  playButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const RockPaperScissors = ["rock", "paper", "scissor"];
      const randomNum = Math.floor(Math.random() * 3);
      const computerSelection = RockPaperScissors[randomNum];
      game.computer.choice = computerSelection;
    });
  });
}
