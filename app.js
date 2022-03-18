const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const finalResultDispaly = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice ;
let computerChoice;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice();
    // winnerChecker();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        computerChoice = 'rock'
    }
    if(randomNumber === 1){
        computerChoice = 'papper'
    }
    if(randomNumber === 2){
        computerChoice = 'scissor'
    }
    console.log(computerChoice)
    computerChoiceDisplay.innerHTML = computerChoice
}

function winnerChecker() {
    if ((computerChoice == 'rock' && userChoice == 'scissor') || (computerChoice == 'papper' && userChoice == 'rock') || (computerChoice == 'scissor' && userChoice == 'papper'))
    {
       finalResultDispaly.textContent = 'computer is winner' 
    }
    if((computerChoice == 'rock' && userChoice == 'papper') || (computerChoice == 'papper' && userChoice == 'scissor') || (computerChoice == 'scissor' && userChoice == 'rock')){
        finalResultDispaly.textContent = 'You won the game'
    }
    if(computerChoice === userChoice){
        finalResultDispaly.textContent = 'both have same points,game draw'
    }
}