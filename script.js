// Set up the choices of rock, paper, or scissors
const choices = ["rock", "paper", "scissors"];

// Declare the score-keeping variables
let playerScore = 0;
let computerScore = 0;

// Declare the DOM variables
let display = document.getElementById('results');
let para = document.createElement("p");

// Set up the buttons to make the player's choice
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.id;
        game(playerChoice);
    });
});

// Have computer choose rock, paper, or scissors at random
// Function to choose 1 item from an array
function getComputerChoice(array) {
    // Get a random index for the array
    const randomChoice = Math.floor(Math.random() * choices.length);

    // Return the item at the random index
    return array[randomChoice];
}

// Play games until there's a winner
function game(playerChoice) {
    // Clear the div so the scorekeeping looks cleaner
    results.replaceChildren();
        // Gameplay function
        function playRound(playerSelection, computerSelection) {
            console.log(playerSelection);
            console.log(computerSelection);
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

        // Play a game
        let round = playRound(playerChoice, cpuChoice);
        let roundNode = document.createElement("p");
        roundNode.textContent = round;
        results.appendChild(roundNode);

        // Keep score
        if (round.substring(0, 7) == "You win") {
            playerScore += 1;
        } else if (round.substring(0, 8) == "You lose") {
            computerScore += 1;
        }
        
        // Report the score
        let scoreNode = document.createElement("p");
        scoreNode.textContent = ("You have won " + playerScore.toString() + " games. Computer has won " + computerScore.toString() + " games.");
        results.appendChild(scoreNode);
    
    // Announce the winner
    if (playerScore >= 5) {
        let finalResultNode = document.createElement("p");
        finalResultNode.textContent = ("You beat the computer!");
        results.appendChild(finalResultNode);
    } else if (computerScore >= 5) {
        let finalResultNode = document.createElement("p");
        finalResultNode.textContent = ("The computer beat you!");
        results.appendChild(finalResultNode);
    }
    
}