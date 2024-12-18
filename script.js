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
      checkWinner()
      break

    case 'buttonPaper':
      playRound('paper', playGame());
      checkWinner()
      break

    case 'buttonScissor':
      playRound('scissor', playGame());
      checkWinner()
      break

  }

});

// this function check the winner and replace the previous p if there were a previous p
function checkWinner() {
  const showWinner = document.querySelector('#showWinner');

  if (humanScore === 5) {
    const showWinner = document.querySelector('#showWinner');
    let newDivWinner = document.createElement('div');
    let oldDivWinner = document.querySelector('#showWinner>div');

    if(!oldDivWinner){
      showWinner.appendChild(newDivWinner);
      newDivWinner.textContent = 'You are the winner';
  } 
    else {
      oldDivWinner.replaceWith(newDivWinner);
      newDivWinner.textContent = 'You are the winner';
  }
    computerScore = 0;
    humanScore = 0;
  }
  
  else if (computerScore === 5) {
    const showWinner = document.querySelector('#showWinner');
    let newDivWinner = document.createElement('div');
    let oldDivWinner = document.querySelector('#showWinner>div');

  if(!oldDivWinner){
    showWinner.appendChild(newDivWinner);
    newDivWinner.textContent = 'The computer is the winner';
} 
  else {
    oldDivWinner.replaceWith(newDivWinner);
    newDivWinner.textContent = 'The computer is the winner';
  }
    computerScore = 0;
    humanScore = 0;
  }
}


function printScores() {
/*
  const showResults = document.querySelector('#showResults');
  const results = document.createElement('p');
  results.textContent = `Your score: ${humanScore} -- Computer score: ${computerScore}`;
  showResults.appendChild(results);
*/
  let body = document.querySelector('#showResults');
  let newDiv = document.createElement('div');
  let oldDiv = document.querySelector('#showResults>div');

  if(!oldDiv){
      body.appendChild(newDiv);
      newDiv.textContent = `Your score: ${humanScore} -- Computer score: ${computerScore}`;
  } else {
      oldDiv.replaceWith(newDiv);
      newDiv.textContent = `Your score: ${humanScore} -- Computer score: ${computerScore}`;
  }



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