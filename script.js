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
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return("It's a tie!");
        }   else if (computerSelection === "rock") {
              return("You win, paper beats rock!");
        }   else if (computerSelection === "scissors") {
              return("You lose, scissors cut paper! :(");
        }
    }  else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return("You lose, paper beats rock! :(");
        }   else if (computerSelection === "rock") {
              return("It's a tie!");
        }   else if (computerSelection === "scissors") {
              return("You win, rock breaks scissors!");
        }
    }  else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return("You win, scissors cut paper! :)");
        }   else if (computerSelection === "rock") {
              return("You lose, rock breaks scissors! :(");
        }   else if (computerSelection === "scissors") {
              return("It's a tie!");
        }
    } 
}
