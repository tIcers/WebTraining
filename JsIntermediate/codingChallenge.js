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








// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 


