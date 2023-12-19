function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if (rng === 0) computerChoice = "rock";
  else if (rng === 1) computerChoice = "paper";
  else computerChoice = "scissors";
  return computerChoice;
}

let results = {
  wins: 0,
  loses: 0,
  ties: 0,
};
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  let userChoice = button.innerHTML;
  button.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
  });
});

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

  countResult(result);
  displayResult(userSelection, computerSelection, result);
}

function displayResult(userSelection, computerSelection, result) {
  const main = document.querySelector("main");
  let div = document.querySelector("div");
  if (!div) {
    div = document.createElement("div");
    div.style.marginTop = "20px";
    main.appendChild(div);
  }
  div.innerHTML = `You choose ${userSelection} and computer choose ${computerSelection}. Result: ${result} <br>Scoreboard: Wins: ${results.wins}, Loses: ${results.loses}, Ties: ${results.ties}`;

  if (results.wins === 5) {
    div.innerHTML += "<br>You won the whole match!";
    resetResults();
  } else if (results.loses === 5) {
    div.innerHTML += "<br>Computer won the whole match!";
    resetResults();
  }
}

function resetResults() {
  results.wins = 0;
  results.loses = 0;
  results.ties = 0;
}

function countResult(result) {
  if (result === "win") {
    results.wins++;
  } else if (result === "lose") {
    results.loses++;
  } else {
    results.ties++;
  }
  console.log(results);
}
