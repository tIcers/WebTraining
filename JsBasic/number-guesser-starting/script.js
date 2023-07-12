let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
	result = Math.floor(Math.random() * 10);
	console.log(result);
	return result; 
}

function compareGuesses(humanGuess, computerGuess, secretNum){
	let human = Math.abs(secretNum - humanGuess);
	let computer = Math.abs(secretNum - computerGuess);

	if(human === computer){
		console.log('tie')
		return true
	}else if(human > computer){
		console.log('computer won')
		return false
	}else if(computer > human){
		console.log('human won')
		return true
	}


}

function updateScore(winner){
	if(winner ==='human'){
		humanScore ++;
	}else{
		computerScore++;
	}

}

function advanceRound(numberTobeUpdated){
	console.log("before updated number " + numberTobeUpdated)
	numberTobeUpdated +=1;
	console.log('number has updated: ' + numberTobeUpdated)
	return numberTobeUpdated++;
}


