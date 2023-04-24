// rock-paper-scissors 

// Date: 04-23-2023

let playerWins = 0;
let computerWis = 0;

// Computes the computer choice
function getComputerChoice() {
    const CHOICE = ["rock", "paper", "scissors"];

    return CHOICE[Math.floor(Math.random() * 3)];
}

// Plays a round of rock, paper, scissors and declares a winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `Tie Game! You both chose ${playerSelection}`;
    }

    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            computerWis++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }

        else {
            playerWins++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }

    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            computerWis++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }

        else {
            playerWins++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            computerWis++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }

        else {
            playerWins++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
}

// Plays out x amount rounds for one complete game
function game() {
    const ROUNDS = 5;

    for (i = 0; i < ROUNDS; i++) {
        const playerChoice = prompt("Enter your choice - rock, paper, scissors: ");
        const computerChoice = getComputerChoice();

        console.log(playRound(playerChoice, computerChoice));
    }

    if (playerWins > computerWis){
        alert("Good Job Player! You have won :)")
    }

    else if (playerWins < computerWis) {
        alert("Do Better Player! You have lost :(")
    }

    else {
        alert("Congratulations! It's a Tie!")
    }
}

game();