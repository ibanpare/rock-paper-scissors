function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100);
    if (choice <= 33) {
        return "Paper";
    } else if (choice > 66) {
        return "Rock";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let keepGoing = true;

    while(keepGoing) {
        
        let humanChoice = prompt("What's your choice?", "Rock, Paper or Scissors");
        humanChoice = humanChoice.toLowerCase();
        humanChoice = humanChoice.trim()

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
        } else {
            alert("Your choice is not valid, try again")
        }
    }
}