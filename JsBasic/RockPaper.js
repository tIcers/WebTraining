console.log('hi');

function getUserChoice(userInput){
  userInput = userInput.toLowerCase();
  if(userInput ==='rock'){
    console.log('rock!');
    return userInput;
  }else if(userInput =='paper'){
    console.log('paper');
    return userInput;
  }else if(userInput =='scissors'){
    console.log('scissors')
    return userInput;
  }else{
    console.log('you should put rock or paper or scissors');
  }
}

// getUserChoice('rock');

function getComputerChoice(){
  randomNum = Math.floor(Math.random() * 3);
  if(randomNum ===0){
    console.log('rock');
    return 'rock';
  }else if(randomNum ===1){
    console.log('paper');
    return 'paper';
  }else{
    console.log('sciessors');
    return 'sciessors';
  }
}

console.log(getComputerChoice);

function determineWinner(userChoice, computerChoice){
  if ( userChoice == computerChoice){
    return 'tie'
  }else if (userChoice == 'rock'){
    if (computerChoice =='paper'){
      return 'computer won'
    }else{
      return 'user won'
    }
  }else if(userChoice =='paper'){
    if(computerChoice =='sciessors'){
      return 'computer won'
    }else if(computerChoice == 'rock'){
      return 'user won'
    }
  }else if (userChoice =='sciessors'){
    if(computerChoice =='rock'){
      return 'computer won'
    }else if(computerChoice =='paper'){
      return 'user won'
    }
  }
}
userChoice = getUserChoice('rock')
computerChoice = getComputerChoice()

function playGame(){
  userChoice = getUserChoice('rock')
  
}