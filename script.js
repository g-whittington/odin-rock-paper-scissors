// rock-paper-scissors 

// Date: 04-23-2023

function getComputerChoice() {
    const CHOICE = ["rock", "paper", "scissors"];

    return CHOICE[Math.floor(Math.random() * 3)];
}
