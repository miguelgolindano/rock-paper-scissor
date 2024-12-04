let roundTimes = 0;
let humanScore = 0;
let computerScore = 0;

// this function let the computer choice using a random number
function getComputerChoice() {
  let b = Math.floor(Math.random() * 100)
  if (b <= 33) {
    b = 'rock';
  }

  else if (b >= 66) {
    b = 'paper';
  }

  else {
    b = 'scissor';
  }

  return b
}



//this function get the choice of the user and return it lowercase
function getHumanChoice() {
  let a = prompt('Your Choice', 'Here you can enter your choice')
  return a.toLowerCase()
}


for(let i = 0; i <= 4; i++) {
      
  playGame();
  
  if (roundTimes >= 4) {
    console.log('Max Number of round, BYE :P')
  }

  roundTimes++

}

function printScores() {
  console.log(`this is your score: ${humanScore}`) 
  console.log(`this is the computer score: ${computerScore}`) 
}

function playGame() {
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);

  function playRound(humanChoice, computerChoice) {
    // this switch let select the winner comparing the humanChoice against the computerChoice
    switch(humanChoice) {
    
      case 'paper':      
        if (computerChoice == 'paper') {
          console.log('It\'s a draw!');
        }
        else if (computerChoice == 'rock') {
          console.log('You win : Paper beats Rock!');
          humanScore++
          printScores() 
        }
  
        else if (computerChoice == 'scissor') {
          console.log('You lose : Scissor beats Paper!');
          computerScore++
          printScores()
        }
        break;
    
      case 'rock':
        if (computerChoice == 'paper') {
          console.log('You lose : Scissor beats Paper!');
          computerScore++
          printScores() 
        }
        else if (computerChoice == 'rock') {
          console.log('It\'s a draw!');
        }
  
        else if (computerChoice == 'scissor') {
          console.log('You win : Paper beats Rock!');
          humanScore++
          printScores() 
        }
        break;
  
      case 'scissor':
        if (computerChoice == 'paper') {
          console.log('You win : Paper beats Rock!');
          humanScore++
          printScores() 
        }
        
        else if (computerChoice == 'rock') {
          console.log('You lose : Scissor beats Paper!');
          computerScore++
          printScores()    
        }
  
        else if (computerChoice == 'scissor') {
          console.log('It\'s a draw!');
        }

        break;
      
      default:
        console.log('Check your spell');
    }

  }

}









/*
console.log(getComputerChoice());
console.log(getHumanChoice());
*/