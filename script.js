// create a play function that contains
// - getPlayerChoice function
// - getComputerChoice function
// - countScore function
// - showResult function
// - showScore function

(function play() {
  getPlayerChoice();
  getComputerChoice();
  countScore(isPlayerWin);
  showResult(isPlayerWin);
  showScore();
})();

// create a variable to store all buttons
const playButtons = document.querySelectorAll(".btn-choice");

// create object that contains:
// - player and computer keys
// - choice and score values

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

// create showScore function
// - create variables main(query selector) and h1(new) 
// - attach onClick event listener to each button
// - change the text content of h1 at each click
// - append h1 to main

function showScore() {
  const main = document.querySelector("main");
  const h1 = document.createElement("h1");

  playButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      h1.textContent = `${game.player.score} - ${game.computer.score}`;
    });
  });

  main.appendChild(h1);
}

// create showResult function
// - create main(for link) and p(new) variables
// - use isPlayerWin as callback function
// - use condition in previous playRound function
// - append p to main

function showResult(isPlayerWin) {
  const main = document.querySelector("main");
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

// recreate previous showScore function into a new countScore function
// - function performs only one task - counting score !!!!!!!
// - use isPlayerWin as a callback function
// - attach onClick event listener to each button
// - use condition in the showScore function
// - store score in a game object

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

// create isPlayerWin function
// - function need two parameters playerSelection and computerSelection
// - use previous condition in the playRound function

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

// create getPlayerChoice function:
// - iterate over all buttons
// - attach onClick event listener to each button
// - store the button`s innerText in the game object

function getPlayerChoice() {
  playButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const playerSelection = btn.innerText.toLowerCase();
      game.player.choice = playerSelection;
    });
  });
}

// modify getPlayerChoice function:
// - attach an onClick event listener to each button
// - store a random value in the game object

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
