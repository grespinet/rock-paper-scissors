function getComputerChoice() {
    let a = Math.random();

    if (a < 0.3) {
        console.log('Bot played Rock.');
        return 'Rock';
    } else if (a >= 0.3 && a <= 0.6) {
        console.log('Bot played Paper.');
        return 'Paper';
    } else {
        console.log('Bot played Scissors.');
        return 'Scissors';
    }
}


function getHumanChoice() {
    let a = prompt('Rock, paper or scissors?', '');

    if (a.toLowerCase() === 'rock') {
        console.log('You played Rock.');
        return 'Rock';
    } else if (a.toLowerCase() === 'paper') {
        console.log('You played Paper.');
        return 'Paper';
    } else if (a.toLowerCase() === 'scissors') {
        console.log('You played Scissors.');
        return 'Scissors';
    } else {
        prompt('Wrong input, try again. Rock, paper or scissors?')
    }

}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {


    switch (humanChoice) {
        case 'Rock':
            if (computerChoice == 'Scissors') {
                console.log('You win! Rock beats Scissors.');
                return {
                    'you': ++humanScore, 'bot': computerScore
                };



            } else if (computerChoice == 'Paper') {
                console.log('You lose! Paper beats Rock.');
                return {
                    'you': humanScore, 'bot': ++computerScore
                };

            } else if (computerChoice == 'Rock') {
                console.log("Uh oh... It's a tie.");
                return {
                    'you': humanScore, 'bot': computerScore
                }

            }
            break

        case 'Paper':
            if (computerChoice == 'Scissors') {
                console.log('You lose! Scissors beat Paper.');
                return {
                    'you': humanScore, 'bot': ++computerScore
                };
            } else if (computerChoice == 'Paper') {
                console.log("Uh oh... It's a tie.");
                return {
                    'you': humanScore, 'bot': computerScore
                };
            } else {
                console.log('You win! Paper beats Rock.');
                return {
                    'you': ++humanScore, 'bot': computerScore
                };
            }

        case 'Scissors':
            if (computerChoice == 'Scissors') {
                console.log("Uh oh... It's a tie.");
                return {
                    'you': humanScore, 'bot': computerScore
                };

            } else if (computerChoice == 'Paper') {
                console.log('You win! Scissors beat Paper.');
                return {
                    'you': ++humanScore, 'bot': computerScore
                };
            } else {
                console.log('You lose! Rock beats Scissors.');
                return {
                    'you': humanScore, 'bot': ++computerScore
                };
            }
    }
}

let roundOne = playRound(getHumanChoice(), getComputerChoice());
console.log(roundOne);
let roundTwo = playRound(getHumanChoice(), getComputerChoice());
console.log(roundTwo);









