let playerSelection = 0;
let computerSelection = 0;

function getComputerChoice () {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "rock"
    }
    else if (random == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function game() {

    function playRound(playerSelection, computerSelection) {
        // your code here!
    }
    
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

}
