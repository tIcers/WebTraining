

function getSleepHours(day){
	switch(day){
		case "monday":
			console.log("8 hours");
			return 8;
		case "tuesday":
			console.log("7 hours");
			return 7
		case "wednesday":
			console.log("7 hours");
			return 7
		case "thursday":
			console.log("6 hours");
			return 6
		case "friday":
			console.log("5 horus");
			return 5
		case "saturday":
			console.log("9 hours");
			return 9
		case "sunday":
			console.log('8 hours');
			return 8
	}
}

function getActualSleepHours(){
	actualSleep = getSleepHours('monday') + getSleepHours('wednesday') + getSleepHours("sunday") + getSleepHours("sunday") + getSleepHours("sunday")
	console.log("your actual sleep is " + actualSleep)
	return actualSleep
}

function getIdealSleepHours(){
	idealSleep = getSleepHours('saturday') * 7 
	console.log(idealSleep)
	console.log("your idealSleep is " + idealSleep)
	return idealSleep
}

getActualSleepHours()
getIdealSleepHours()


function calculateSleepDebt(){
	result = getActualSleepHours() - getIdealSleepHours();

	if (result > 0){
		console.log("You are doing great!")
		console.log("You sleep " + result + "hours more")
	}else if(result == 0){
		console.log("You are getting same amount of ideal sleep!")
	}else{
		console.log("You are sleep debt rn!")
		console.log("you need " + Math.abs(result) + "hours more!")
	}
}

calculateSleepDebt()