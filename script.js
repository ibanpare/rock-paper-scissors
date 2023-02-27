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
}
