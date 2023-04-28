function reverseArray(arr){
  let reverseArr = [];
  for(let i = arr.length - 1; i >= 0; i --){
    reverseArr.push(arr[i])
  }
  return reverseArr;
}
const sentence = ['sense.','make', 'all', 'will', 'This'];
const reversedSentence = reverseArray(sentence)
console.log(reversedSentence) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];

// Write your code here:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

function greetAliens(aliens){
for(let i = 0; i < aliens.length; i ++){
	console.log("Oh powerful " + aliens[i] + ", " + "we humans offer our unconditional surrender!")
}
// When you're ready to test your code, uncomment the below and run:


}
greetAliens(aliens);

// Write your code here:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
const convertToBaby = animals.map(function(elements){
	return 'baby ' + elements
})

// When you're ready to test your code, uncomment the below and run:


console.log(convertToBaby) 

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}


const declineEverything = arr => {
  arr.forEach(politelyDecline)
}

const acceptEverything = (arr) => {
	arr.forEach( e => {
	console.log(`Ok, please, I will eat some  + ${e}`)
	})
}

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = arr => arr.map(toSquare) 




const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutGreetings =arr => arr.map(function(elements){
	return elements.toUpperCase() + '!'
})

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]


// Write your code here:

function sortYears(arr){
	arr.sort(function(a, b) {
    return b - a
  })
  return arr
}




// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

function justCoolStuff(arr1, arr2){
	return arr1.filter(function(element){
	  return arr2.includes(element);
	});
  }
  
  // Test the function
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff));
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

// Write your code here:

function isTheDinnerVegan(meal){
	return meal.every(food => food.source ==='plant')  
}






// Feel free to comment out the code below to test your function
/*
const dinner = [{name: 'hamburger', source: 'meat'},
 {name: 'cheese', source: 'dairy'},
  {name: 'ketchup', source:'plant'},
   {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false
*/