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
// Call the function to make a random choice and assign it to a variable
const cpuChoice = getComputerChoice(choices);

// Have player choose rock, paper, or scissors
// Make player choice case-insensitive
// Compare computer choice to player choice
// Announce the winner
// Play 5 games
    // Keep score for 5 games
    // Announce the winner at the end of 5 games