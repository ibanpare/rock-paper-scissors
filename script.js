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