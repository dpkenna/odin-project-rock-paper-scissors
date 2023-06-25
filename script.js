// Set up the choices of rock, paper, or scissors
const choices = ["rock", "paper", "scissors"];

// Have computer choose rock, paper, or scissors at random
// Function to choose 1 item from an array
function getComputerChoice(array) {
    // Get a random index for the array
    const randomChoice = Math.floor(Math.random() * choices.length);

    // Return the item at the random index
    return array[randomChoice];
}

// Play a game
function playRound(playerSelection, computerSelection) {
    // Compare computer choice to player choice and announce the result
        if (playerSelection == "rock" && computerSelection == "paper") {
            return("You lose! Paper beats rock.");
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            return("You win! Rock beats scissors.");
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            return("You win! Paper beats rock.");
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            return("You lose! Scissors beats paper.");
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            return("You win! Scissors beats paper.");
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            return("You lose! Rock beats scissors.");
        } else {
            return("It's a tie.");
        }
    }

// Call the getComputerChoice function to make a random choice and assign it to a variable
const cpuChoice = getComputerChoice(choices);

// Have player choose rock, paper, or scissors and change it to lowercase
const playerChoice = prompt("Choose rock, paper, or scissors");
const plyChoice = playerChoice.toLowerCase();

// Play 5 games
    // Keep score for 5 games
    // Announce the winner at the end of 5 games