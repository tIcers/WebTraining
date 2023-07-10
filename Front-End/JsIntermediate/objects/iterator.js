const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(items) {
	console.log('I want to eat a ' + items)
});


const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animals => {
	return animals.charAt(0)
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumbers =>{
	return bigNumbers / 100
})


const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumbers => {
	return randomNumbers < 250
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(favoriteWords => {
	return favoriteWords.length > 7;
})


const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animals => {
	return animals ==='elephant'
})

const startsWithS = animals.findIndex(animal => {
	return animal[0] === 's' ? true : false;
  });
  
// reduce function

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue)=>{
	console.log('The value of accumulator: ', accumulator)	
	console.log('The value of currentValue: ', currentValue)
	return accumulator + currentValue
},10)
console.log(newSum)

const interestingWords = words.filter(words => {
	return words.length > 5
})

console.log(interestingWords.every((word) => { 
	return word.length > 5
  } ));
  