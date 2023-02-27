function getComputerChoice() {
    let randomChoice = Math.random()

    switch(randomChoice > 0){
        case randomChoice <= 0.33:
            return "paper";
            break;
        case randomChoice > 0.33 && randomChoice <= 0.66:
            return "scissors";
            break;
        case randomChoice > 0.66:
            return "rock";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return("tie");
        }   else if (computerSelection === "rock") {
              return("player wins");
        }   else if (computerSelection === "scissors") {
            return("computer wins");
        }
    }  else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
              return("computer wins");
        }   else if (computerSelection === "rock") {
              return("tie");
        }   else if (computerSelection === "scissors") {
              return("player wins");
        }
    }  else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
              return("player wins");
        }   else if (computerSelection === "rock") {
              return("computer wins");
        }   else if (computerSelection === "scissors") {
              return("tie");
        }
    } 
}

function game() {

    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick one: paper, rock or scissors");
        let outcome;

        outcome = playRound(playerSelection, getComputerChoice());

        if (outcome === "computer wins") {
            computerPoints++;
        } else if (outcome === "player wins") {
            playerPoints++;
        }

        console.log("Il punteggio è di " + playerPoints + " a " + computerPoints);
     }

     if (playerPoints > computerPoints) {
        console.log("Hai vinto!");
     } else if (playerPoints === computerPoints) {
        console.log("Abbiamo un pareggio!");
     } else {
        console.log("Il computer vince!");
     }
} 