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
      resultsPara.textContent =
        `Computer picked ${computerChoice}. Rock beats scissors. Computer wins!`
      ;
    } else if (userChoice === "paper") {
      humanScore += 1;
      resultsPara.textContent =`Computer picked ${computerChoice}. Paper beats rock. You win!`;
    } else {
        resultsPara.textContent ="It's a tie!";
    }
  }

  if (computerChoice === "paper") {
    if (userChoice === "rock") {
      computerScore += 1;
      resultsPara.textContent = `Computer picked ${computerChoice}. Paper beats rock. Computer wins!`;
    } else if (userChoice === "scissors") {
      humanScore += 1;
      resultsPara.textContent = `Computer picked ${computerChoice}. Scissors beats paper. You win!`;
    } else {
        resultsPara.textContent = "It's a tie!";
    }
  }

  if (computerChoice === "scissors") {
    if (userChoice === "paper") {
      computerScore += 1;
      resultsPara.textContent =
        `Computer picked ${computerChoice}. Scissors beats paper. Computer wins!`
      ;
    } else if (userChoice === "rock") {
      humanScore += 1;
      resultsPara.textContent =`Computer picked ${computerChoice}. Rock beats scissors. You win!`;
    } else {
        resultsPara.textContent ="It's a tie!";
    }
  }
  updateScore();
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => playRound(getComputerChoice(),"rock"));

const paperBtn = document.querySelector("#paper")
paperBtn.addEventListener("click", () => playRound(getComputerChoice(),"paper"));

const scissorsBtn = document.querySelector("#scissors")
scissorsBtn.addEventListener("click", () => playRound(getComputerChoice(),"scissors"));

const resultsPara = document.querySelector("#resultsPara");

const scorePara = document.querySelector("#scorePara");

function updateScore() {
    if(humanScore === 5) {
        scorePara.innerText = `You: ${humanScore} \nComputer: ${computerScore}
        \nGame Over.
        \nYou win!
        `
        
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        scorePara.textContent = `You: ${humanScore} \nComputer: ${computerScore}
        \nGame Over.
        \nComputer wins!
        `
        
        humanScore = 0;
        computerScore = 0;
    } else {
        scorePara.innerText = `You: ${humanScore} \nComputer: ${computerScore}`;
    }
}
