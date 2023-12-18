let pscore = 0;
let cscore = 0;

function getComputerChoice() {
    let num = Math.floor((Math.random() * 3) + 1)
    let choice = '';
    switch (num) {
        case 1: choice = 'rock'; break;
        case 2: choice = 'paper'; break;
        case 3: choice = 'scissors'; break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let print = '';

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        
        pscore++;
        print = 'you win! ' + playerSelection + ' beats ' + computerSelection + '!';

        if (pscore == 5 && cscore < 5) {
            print = 'you won the game! yay!!';
            buttons.forEach(elem => {
                elem.disabled = true
            })
        }
    }
    else if (playerSelection == computerSelection) {
        print = 'tie. try again.';
    }
    else {
        cscore++;
        print = 'you lose! ' + computerSelection + ' beats ' + playerSelection + '!';

        if (cscore == 5 && pscore < 5) {
            print = 'you lost the game...';
            buttons.forEach(elem => {
                elem.disabled = true
            })
        }
    }
    updateScores();
    document.getElementById('print').innerHTML = print;
    return;
  }

function updateScores() {
    document.getElementById('pscore').textContent = pscore.toString();
    document.getElementById('cscore').textContent = cscore.toString();
}

let playerSelection;
const buttons = document.querySelectorAll("input");
buttons.forEach((button) => {
button.addEventListener("click", () => {
    playRound(button.value, getComputerChoice());
})
})

const computerSelection = getComputerChoice();
    
