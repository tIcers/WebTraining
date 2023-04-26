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



