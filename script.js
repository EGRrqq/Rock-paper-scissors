function getComputerChoice() {
  // initialize an array that contains 3 elements such as "rock", "paper" and "scissors"

  const RockPaperScissors = ["rock", "paper", "scissors"];

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

console.log(RockPaperScissors(), getUserChoice());
