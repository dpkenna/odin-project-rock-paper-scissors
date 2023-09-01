// Set up the choices of rock, paper, or scissors
const choices = ["rock", "paper", "scissors"];

// Set up the buttons to make the player's choice
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.id;
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

// Play 5 games
function game() {
    // Declare score-keeping variable
    let playerScore = 0;
    let computerScore = 0;

    // Loop for 5 games
    // for (let i = 0; i < 5; i++) {
        // Gameplay function
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

        // Play a game
        let round = playRound(plyChoice, cpuChoice);
        console.log(round);

        // Keep score
        if (round.substring(0, 7) == "You win") {
            playerScore += 1;
        } else if (round.substring(0, 8) == "You lose") {
            computerScore += 1;
        }
        
        // Report the score
        console.log("You have won " + playerScore.toString() + " games. Computer has won " + computerScore.toString() + " games.");
    // }
    
    // Announce the winner at the end of 5 games
    if (playerScore > 5) {
        console.log("You beat the computer!")
    } else if (computerScore > 5) {
        console.log("The computer beat you!")
    }
    
}

// Play the game
game();