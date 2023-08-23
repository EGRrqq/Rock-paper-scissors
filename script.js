function getComputerChoice() {
  // initialize an array that contains 3 elements such as "rock", "paper" and "scissors"

  const RockPaperScissors = ['rock', 'paper', 'scissors'];

  // create a variable that randomly access number between 0 and 2

  const randomNum = Math.floor(Math.random() * 3);

  // access the array elements using this variable in square brackets

  console.log(RockPaperScissors[randomNum]);
}

getComputerChoice()
