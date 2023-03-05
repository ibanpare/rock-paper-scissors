const resultDiv = document.querySelector("#result p")
const scoreDiv = document.querySelector("#score p")
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

function playerWins() {
    resultDiv.textContent += ("You win this round.\n");
    resultDiv.textContent += (`******************************************************************************\n`);
    playerScore += 1;
};

function tie() {
    resultDiv.textContent += ("It's a tie.\n");
    resultDiv.textContent += (`******************************************************************************\n`);
};

function computerWins() {
    resultDiv.textContent += ("Computer wins this round.\n");
    resultDiv.textContent += (`******************************************************************************\n`);
    computerScore += 1;  
};

function printScore() {
    resultDiv.textContent += (`The score is now ${playerScore} - ${computerScore} for the player.\n`);

    if (computerScore === 5) {
        resultDiv.textContent += `I'm sorry PLAYER_NAME, computer won!\n`;
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore === 5) {
            resultDiv.textContent += `Congrats PLAYER_NAME, you won!\n`;
            computerScore = 0;
            playerScore = 0;
    }
};

function play() {

    resultDiv.textContent = "";

    let computerSelection = getComputerChoice();

    resultDiv.textContent += (`You chose ${playerSelection}, while the computer chose ${computerSelection}.\n`);
    resultDiv.textContent += (`******************************************************************************\n`);

    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            tie();
            printScore();
        }   else if (computerSelection === "rock") {
                playerWins();
                printScore();
        }   else if (computerSelection === "scissors") {
                computerWins();
                printScore();
        }
    }  else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerWins();
            printScore();
        }   else if (computerSelection === "rock") {
                tie();
                printScore();
        }   else if (computerSelection === "scissors") {
                playerWins();
                printScore();
        }
    }  else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerWins();
            printScore();
        }   else if (computerSelection === "rock") {
                computerWins();
                printScore();
        }   else if (computerSelection === "scissors") {
                tie();
                printScore();
        }
    } 
}

// I think we need abudant refactoring here. Metterei un check per lo score anche in altri punti per miglorare i messaggi
// serve anche un reset finale