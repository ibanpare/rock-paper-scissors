const resultDiv = document.querySelector("#result p")
const uiSelection = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;
uiSelection.forEach((button) => {button.addEventListener("click", getPlayerSelection)});
uiSelection.forEach((button) => {button.addEventListener("click", play)});

function getComputerChoice() {
    let randomChoice = Math.random()

    if (randomChoice <= 0.33) {
        return "paper";
    } else if (randomChoice > 0.33 && randomChoice <= 0.66) {
        return "scissors";
    } else if (randomChoice > 0.66) {
        return "rock";
    }
};

function getPlayerSelection(e) {
    playerSelection = e.target.id;
};

function playerWins () {
    resultDiv.textContent += ("player wins\n");
    playerScore += 1;
};

function tie () {
    resultDiv.textContent += ("It's a tie\n");

};

function computerWins () {
    resultDiv.textContent += ("computer wins\n");
    computerScore += 1;
};

function play() {

    let computerSelection = getComputerChoice();

    resultDiv.textContent += (`You chose ${playerSelection}, while the computer chose ${computerSelection}\n`);

    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            tie();
        }   else if (computerSelection === "rock") {
                playerWins();
        }   else if (computerSelection === "scissors") {
                computerWins();
        }
    }  else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerWins();
        }   else if (computerSelection === "rock") {
            tie();
        }   else if (computerSelection === "scissors") {
            playerWins();
        }
    }  else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerWins();
        }   else if (computerSelection === "rock") {
            computerWins();
        }   else if (computerSelection === "scissors") {
            tie();
        }
    } 
}
