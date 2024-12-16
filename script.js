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

// this event listener uses the event delegation to listen for all the buttons

let buttons = document.querySelector('#buttons');
buttons.addEventListener('click', (event) => {
  let target = event.target;

  switch(target.id) {

    case 'buttonRock':
      playRound('rock', playGame());
      break

    case 'buttonPaper':
      playRound('paper', playGame());
      break

    case 'buttonScissor':
      playRound('scissor', playGame());
      break

  }

});




function printScores() {
  console.log(`this is your score: ${humanScore}`) 
  console.log(`this is the computer score: ${computerScore}`)
  console.log('-----------------------------------')
}

// playGame let the program compare results and choose a winner
function playGame() {
  const computerSelection = getComputerChoice();
  return computerSelection
}

/* this function use a switch and let select the winner comparing the humanChoice 
against the computerChoice and add a score on the winner counter */
function playRound(humanChoice, computerChoice) {

  /* this switch let select the winner comparing the humanChoice 
  against the computerChoice and add a score on the winner counter */

  switch(humanChoice) {
  
    case 'paper':      
      if (computerChoice == 'paper') {
        console.log('It\'s a draw!');
        printScores()
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
        printScores()
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
        printScores()
      }

      break;
    
    default:
      console.log('Check your spell');
      console.log('-----------------------------------')
  }

}