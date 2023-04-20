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
	console.log("tie")
    return 'tie'
  }else if (userChoice == 'rock'){
    if (computerChoice =='paper'){
      console.log("computer won")
      return 'computer won'
    }else{
      console.log("user won")
	  return 'user won'
    }
  }else if(userChoice =='paper'){
    if(computerChoice =='sciessors'){
      console.log("computer won")
	  return 'computer won'
    }else if(computerChoice == 'rock'){
		console.log("user won")
		return 'user won'
    }
  }else if (userChoice =='sciessors'){
    if(computerChoice =='rock'){
      console.log("computer won")
      return 'computer won'
    }else if(computerChoice =='paper'){
      console.log("user won")
	  return 'user won'
    }
  }
}


function playGame(){
	determineWinner(getUserChoice('rock'),getComputerChoice()) 
}

playGame()