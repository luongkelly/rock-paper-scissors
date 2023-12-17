//function that randomly gets the computer selection
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

//function that plays a round of rps
//and adds points to appropiate side
function playRound(playerSelection, computerSelection) {
    let pscore = 0;
    let cscore = 0;
    let print = '';

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        
        pscore++;
        print = 'you win!';

        if (pscore == 5 && cscore < 5) {
            print = 'you won the game!';
        }
    }
    else if (playerSelection == computerSelection) {
        print = 'tie. try again.';
    }
    else {
        cscore++;
        print = 'you lose!';

        if (cscore == 5 && pscore < 5) {
            print = 'you lost the game...';
        }
    }
    return print;
  }

  const playerSelection = 'rock';
  console.log("this is player: " + playerSelection);
  const computerSelection = getComputerChoice();
  console.log("this is computer: " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
    
