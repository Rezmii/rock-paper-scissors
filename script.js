function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if (rng === 0) computerChoice = "Rock";
  else if (rng === 1) computerChoice = "Paper";
  else computerChoice = "Scissors";
  return computerChoice;
}

let computerChoice = getComputerChoice();
console.log(computerChoice);
