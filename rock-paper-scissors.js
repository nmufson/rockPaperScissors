// Create an array named 'choices' with computer's rock paper scissor choices
let choices = ['rock','paper','scissors']

//create a function that turns string parameter lowercase
function lowCase(x) {
    return 
}

// Declare  a function called get ComputerChoice that returns a randomly selected string from choices array
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)]
}

// Declare a function that prompts user to enter a choice and returns it in lowercase 
function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors")
    return playerChoice.toLowerCase()
}


//Declare constant variables that store the return values for both getPlayerChoice() and getComputerChoice()



let userScore = 0
let computerScore = 0

//Create a function that requires player and computer selection parameters and returns a message based on whether 
// you win the round or not 
function playRound(playerSelection,computerSelection) {

    

    if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
        userScore++;
        return playerSelection + ' beats ' + computerSelection + ', you win! UserScore: ' + userScore + ', Computer Score: ' + computerScore;
    } else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        userScore++;
        return playerSelection + ' beats ' + computerSelection + ', you win! UserScore: ' + userScore + ', Computer Score: ' + computerScore;
    } else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
        userScore++;
        return playerSelection + ' beats ' + computerSelection + ', you win! UserScore: ' + userScore + ', Computer Score: ' + computerScore;
    } else if (playerSelection == computerSelection) {
        return 'Both selected ' + playerSelection + ', tie! UserScore: ' + userScore + ', Computer Score: ' + computerScore; 
    } else if (!(playerSelection == 'rock') && !(playerSelection == 'paper') && !(playerSelection == 'scissors')) {
        return 'invalid input';
    } else {
        computerScore++;
        return computerSelection + ' beats ' + playerSelection + ', you lose! UserScore: ' + userScore + ', Computer Score: ' + computerScore;
    }
    
    
    }    


    //Declare a function that runs through five rounds of playRound() *** MAKE THE ARGUMENTS RUN THE PLAYER CHOICE AND COMPUTER CHOICE FUNCTIONS
    function playGame() {
        
        for (let i=0; i < 5; i++) {
            console.log(playRound(getPlayerChoice(),getComputerChoice()))
        }
    
        if (userScore > computerScore) {
            return `Final Score: ${userScore} - ${computerScore}, you win!`;
        } else if (userScore == computerScore) {
            return `Final Score: ${userScore} - ${computerScore}, draw!`;
        } else {
            return `Final Score: ${userScore} - ${computerScore}, you Lose!`;
        }
    }
    console.log(playGame())
//'User Score: ' + userScore + ', Computer Score: ' + computerScore
