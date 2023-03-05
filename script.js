const resultDiv = document.querySelector("#result p")

const uiSelection = document.querySelectorAll("button");
uiSelection.forEach((button) => {button.addEventListener("click", getPlayerSelection)});
uiSelection.forEach((button) => {button.addEventListener("click", playRound)});

function getComputerChoice() {
    let randomChoice = Math.random()

    if (randomChoice <= 0.33) {
        return "paper";
    } else if (randomChoice > 0.33 && randomChoice <= 0.66) {
        return "scissors";
    } else if (randomChoice > 0.66) {
        return "rock";
    }
}

function getPlayerSelection(e) {
    playerSelection = e.target.id;
};

function playRound() {

    let computerSelection = getComputerChoice();

    resultDiv.textContent += (`You chose ${playerSelection}, while the computer chose ${computerSelection}\n`);

    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            resultDiv.textContent += ("tie\n");
        }   else if (computerSelection === "rock") {
            resultDiv.textContent += ("player wins\n");
        }   else if (computerSelection === "scissors") {
            resultDiv.textContent += ("computer wins\n");
        }
    }  else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            resultDiv.textContent += ("computer wins\n");
        }   else if (computerSelection === "rock") {
            resultDiv.textContent += ("tie\n");
        }   else if (computerSelection === "scissors") {
            resultDiv.textContent += ("player wins\n");
        }
    }  else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            resultDiv.textContent += ("player wins\n");
        }   else if (computerSelection === "rock") {
            resultDiv.textContent += ("computer wins\n");
        }   else if (computerSelection === "scissors") {
            resultDiv.textContent += ("tie\n");
        }
    } 
}
