

let input = "turpentine and turtles"
const result = "UUEEIEEAUUEE"

const vowels = ['a','i','u','e','o']

let resultArray = []

for (let i = 0; i < input.length; i++){
	for(let j = 0; j < vowels.length; j++){
		if(input[i] === vowels[j]){
			if(input[i] ==='u'){
				resultArray.push('u','u')
			}else if(input[i]==='e'){
				resultArray.push('e','e')
			}else{
				resultArray.push(input[i])
			}
		}
	}
}
let resultString = resultArray.join('').toUpperCase()

console.log(resultString)

if(result === resultString){
	console.log("This is same result!")
	return true
}