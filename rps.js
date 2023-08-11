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

function game () {

for (i = 0; i < 6; i++) {

function playRound(playerSelection, computerSelection) {
    let computerSelection = getComputerChoice
    let playerScore = 0
    let computerScore = 0
    if (playerSelection == 'rock' && computerSelection == 'scissors' || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore +=1
        return "Congrats! " + playerSelection + "beats " + computerSelection + "!"
    }
    if (playerSelection == computerSelection) {
            return "It's a tie!"
    }
    else {
        computerScore +=1
        return "Aww... " + computerSelection + "beats " + playerSelection + "!"
    }
}

}

}
    
