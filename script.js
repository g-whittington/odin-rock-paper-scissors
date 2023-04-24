// rock-paper-scissors 

// Date: 04-23-2023

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
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }

        else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }

    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }

        else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }

        else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
}