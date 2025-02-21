
// Computer's random choice
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};
console.log(getComputerChoice());

// User's choice
const getUserChoice = () => {
    let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();

    // Validate input
    if (!["rock", "paper", "scissors"].includes(choice)) {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
        return getUserChoice();
    }

    return choice;
};

