let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 100);
  if (choice <= 33) {
    return "paper";
  } else if (choice > 66) {
    return "rock";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let keepGoing = true;

  while (keepGoing) {
    let humanChoice = prompt("What's your choice?", "Rock, Paper or Scissors");
    humanChoice = humanChoice.toLowerCase();
    humanChoice = humanChoice.trim();

    if (
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    ) {
      return humanChoice;
    } else {
      alert("Your choice is not valid, try again");
    }
  }
}

function playRound(computerChoice, userChoice) {
  if (computerChoice === "rock") {
    if (userChoice === "scissors") {
      computerScore += 1;
      alert(
        `Computer picked ${computerChoice}. Rock beats scissors. Computer wins!`
      );
    } else if (userChoice === "paper") {
      humanScore += 1;
      alert(`Computer picked ${computerChoice}. Paper beats rock. You win!`);
    } else {
      alert("It's a tie!");
    }
  }

  if (computerChoice === "paper") {
    if (userChoice === "rock") {
      computerScore += 1;
      alert(
        `Computer picked ${computerChoice}. Paper beats rock. Computer wins!`
      );
    } else if (userChoice === "scissors") {
      humanScore += 1;
      alert(
        `Computer picked ${computerChoice}. Scissors beats paper. You win!`
      );
    } else {
      alert("It's a tie!");
    }
  }

  if (computerChoice === "scissors") {
    if (userChoice === "paper") {
      computerScore += 1;
      alert(
        `Computer picked ${computerChoice}. Scissors beats paper. Computer wins!`
      );
    } else if (userChoice === "rock") {
      humanScore += 1;
      alert(`Computer picked ${computerChoice}. Rock beats scissors. You win!`);
    } else {
      alert("It's a tie!");
    }
  }
}

for (let round = 1; round < 6; round++) {
  alert(`We are at round ${round}`);
  playRound(getComputerChoice(), getHumanChoice());
  alert(`The score so far is ${humanScore} - ${computerScore} for you.`);
}
