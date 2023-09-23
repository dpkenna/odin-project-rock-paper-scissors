// Set up the choices of rock, paper, or scissors
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let display = document.getElementById('results');

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

// Play 5 games
function game(playerChoice) {
    // Declare score-keeping variable
    // Loop for 5 games
    // for (let i = 0; i < 5; i++) {
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
        let roundNode = document.createTextNode(round);
        results.appendChild(roundNode);

        // Keep score
        if (round.substring(0, 7) == "You win") {
            playerScore += 1;
        } else if (round.substring(0, 8) == "You lose") {
            computerScore += 1;
        }
        
        // Report the score
        let scoreNode = document.createTextNode("You have won " + playerScore.toString() + " games. Computer has won " + computerScore.toString() + " games.");
        results.appendChild(scoreNode);
    // }
    
    // Announce the winner
    if (playerScore > 5) {
        console.log("You beat the computer!")
    } else if (computerScore > 5) {
        console.log("The computer beat you!")
    }
    
}