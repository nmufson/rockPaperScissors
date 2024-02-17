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

let playerSelection = ''
let computerSelection = '' 

let userScore = 0
let computerScore = 0

//Create a function that requires player and computer selection parameters and returns a message based on whether 
// you win the round or not 
function playRound(playerSelection,computerSelection) {

    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice()

    if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
        return playerSelection + ' beats ' + computerSelection + ', you win!';
    } else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        return playerSelection + ' beats ' + computerSelection + ', you win!';
    } else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
        return playerSelection + ' beats ' + computerSelection + ', you win!';
    } else if (playerSelection == computerSelection) {
        return 'Both selected ' + playerSelection + ', tie!'; 
    } else if (!(playerSelection == 'rock') && !(playerSelection == 'paper') && !(playerSelection == 'scissors')) {
        return 'invalid input';
    } else {
        return computerSelection + ' beats ' + playerSelection + ', you lose!' ;
    }

    }    


    //Declare a function that runs through five rounds of playRound()
    function playGame() {
        
        for (let i=0; i < 5; i++) {
            console.log(playRound(playerSelection,computerSelection))
        }
    }
    playGame()
