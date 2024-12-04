
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// this function let the computer choice using a random number
function getComputerChoice() {
  let b = Math.floor(Math.random() * 100)
  return b
}

//this function get the choice of the user and return it lowercase
function getHumanChoice() {
  let a = prompt('Your Choice', 'Here you can enter your choice')
  return a.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
  
  switch(humanChoice) {

    case 'paper':      
      if (computerChoice == 'paper') {
        console.log('It\'s a draw!');
      }
      else if (computerChoice == 'rock') {
        console.log('You win : Paper beats Rock!');
        humanScore++
      }

      else if (computerChoice == 'scissor') {
        console.log('You lose : Scissor beats Paper!');
        computerScore++
      }
      break;
  
    case 'rock':
      if (computerChoice == 'paper') {
        console.log('You lose : Scissor beats Paper!');
        computerScore++
      }
      else if (computerChoice == 'rock') {
        console.log('It\'s a draw!');
      }

      else if (computerChoice == 'scissor') {
        console.log('You win : Paper beats Rock!');
        humanScore++
      }
      break;

    case 'scissor':
      if (computerChoice == 'paper') {
        console.log('You win : Paper beats Rock!');
        humanScore++
      }
      
      else if (computerChoice == 'rock') {
        console.log('You lose : Scissor beats Paper!');
        computerScore++        
      }

      else if (computerChoice == 'scissor') {
        console.log('It\'s a draw!');
      }

      break;
  }

}

/*
console.log(getComputerChoice());
console.log(getHumanChoice());
*/