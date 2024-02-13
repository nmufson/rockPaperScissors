// Create an array named 'choices' with computer's rock paper scissor choices
let choices = ['rock','paper','scissors']

// Create  a function called get ComputerChoice that randomly generates a string from choices array
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)]
}