
// Computer's random choice
const getComputerChoice = () => { // variable cannot store multiple variables inside it directly; needs function that creates or modifies variables.                     
    const choices = ["rock", "paper", "scissors"]; // zero-based index positioning
    const randomIndex = Math.floor(Math.random() * choices.length);     // - Math.random() generates a random decimal number between 0 - 0.9.
    return choices[randomIndex]                                         // - Choices.length is 3 since the choices array contains 3 elements.
};                                                                      // - Multiplying by 3 gives a random decimal between 0 - 2.9.
console.log(getComputerChoice());                                       // - Math.floor rounds the number down to nearest whole number (0, 1, or 2).
                                                                        // - randomIndex results in being one of the positions in the choices array.

// User's choice
const getUserChoice = () => {
    let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();

    // Validate input
    if (!["rock", "paper", "scissors"].includes(choice)) {                          //.includes() method checks if array contains specific item and returns true/false.
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
        return getUserChoice();                                                     
    }

    return choice;
};

// choice comparison, winner determination
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock") 
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
};

// Call to play, multiple rounds
const playGame = () => {
    let rounds = Number(prompt("How many rounds do you want to play?"));
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1} of ${rounds}`);

        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
    
        console.log(`You chose: ${userChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
    
        let result = determineWinner(userChoice, computerChoice);
        console.log(result);

        // Update scores based on result
        if (result === "You win!") {
            playerScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }

        console.log(`Score: Player ${playerScore} - ${computerScore} Computer`);
    }

    // Final result
    console.log("Final Score: ");
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie!");
    }

    console.log("Game Over! Thanks for playing.");

}
    
// Start game
playGame();


