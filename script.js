function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if (rng === 0) computerChoice = "rock";
  else if (rng === 1) computerChoice = "paper";
  else computerChoice = "scissors";
  return computerChoice;
}

function playRound(userSelection, computerSelection) {
  let result = "";
  userSelection = userSelection.toLowerCase();

  if (userSelection === "rock") {
    if (computerSelection === "rock") result = "tie";
    else if (computerSelection === "paper") result = "lose";
    else result = "win";
  } else if (userSelection === "paper") {
    if (computerSelection === "rock") result = "win";
    else if (computerSelection === "paper") result = "tie";
    else result = "lose";
  } else {
    if (computerSelection === "rock") result = "lose";
    else if (computerSelection === "paper") result = "win";
    else result = "tie";
  }

  return result;
}

function game() {
  let results = {
    wins: 0,
    loses: 0,
    ties: 0,
  };

  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let userChoice = prompt("Choose: ");
    let result = playRound(userChoice, computerChoice);

    console.log(
      `You choose ${userChoice.toLowerCase()} and computer choose ${computerChoice}`
    );

    if (result === "win") {
      results.wins++;
      console.log("You won!");
    } else if (result === "lose") {
      results.loses++;
      console.log("You lost!");
    } else {
      results.ties++;
      console.log("It's a tie!");
    }
  }

  return results;
}

console.log(game());
