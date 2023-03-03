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

function playRound() {

    let computerSelection = getComputerChoice();

    console.log(`You chose ${playerSelection}, while the computer chose ${computerSelection}`);

    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            console.log("tie");
        }   else if (computerSelection === "rock") {
            console.log("player wins");
        }   else if (computerSelection === "scissors") {
            console.log("computer wins");
        }
    }  else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("computer wins");
        }   else if (computerSelection === "rock") {
            console.log("tie");
        }   else if (computerSelection === "scissors") {
            console.log("player wins");
        }
    }  else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log("player wins");
        }   else if (computerSelection === "rock") {
            console.log("computer wins");
        }   else if (computerSelection === "scissors") {
            console.log("tie");
        }
    } 
}

function getPlayerSelection(e) {
    playerSelection = e.target.id;
};

/* function game() {

    let playerPoints = 0;
    let computerPoints = 0;
    let outcome = playRound(playerSelection, getComputerChoice());

    if (outcome === "computer wins") {
        computerPoints++;
        console.log("Computer wins!");
    } else if (outcome === "player wins") {
        playerPoints++;
        console.log("You win!");
    }

    console.log("The score is " + playerPoints + " - " + computerPoints);
    console.log("***************");

     if (playerPoints > computerPoints) {
        console.log("You won the game!");
     } else if (playerPoints === computerPoints) {
        console.log("It's a tie!");
     } else {
        console.log("Computer wins the game!");
     }
}

*/ 

const uiSelection = document.querySelectorAll("button");
uiSelection.forEach((button) => {button.addEventListener("click", getPlayerSelection)});
uiSelection.forEach((button) => {button.addEventListener("click", playRound)});
