// variables to track score

let humanScore = 0;
let computerScore = 0;

// to randomly get computer choice

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

// to ask user for a choice

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

// to play a round and compare choices

function playRound(computerChoice, userChoice) {
    if (computerChoice === "rock") {
        if (userChoice === "scissors") {
            computerScore += 1;
            console.log(`Computer picked ${computerChoice}. Rock beats scissors. Computer wins!`);
        } else if (userChoice === "paper") {
            humanScore += 1;
            console.log(`Computer picked ${computerChoice}. Paper beats rock. You win!`);
        } else {
            console.log("It's a tie!");
        }
    }

    if (computerChoice === "paper") {
        if (userChoice === "rock") {
            computerScore += 1;
            console.log(`Computer picked ${computerChoice}. Paper beats rock. Computer wins!`);
        } else if (userChoice === "scissors") {
            humanScore += 1;
            console.log(`Computer picked ${computerChoice}. Scissors beats paper. You win!`);
        } else {
            console.log("It's a tie!");
        }
    }

    if (computerChoice === "scissors") {
        if (userChoice === "paper") {
            computerScore += 1;
            console.log(`Computer picked ${computerChoice}. Scissors beats paper. Computer wins!`);
        } else if (userChoice === "rock") {
            humanScore += 1;
            console.log(`Computer picked ${computerChoice}. Rock beats scissors. You win!`);
        } else {
            console.log("It's a tie!");
        }
    }
}
    
playRound(getComputerChoice(),getHumanChoice());


/*

Step 6: Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, 
keeps track of the scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. 
Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. 
You need to recall the choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. 
Specifically, you may want to change the return values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.

*/
