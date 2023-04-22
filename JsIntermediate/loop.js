let vacationSpots =['tokyo', 'paris', 'ny']
console.log(vacationSpots)


for(let i = 5 ; i <= 10; i ++){
	console.log(i)
}

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >=0 ; counter--){
	console.log(counter);
  }

const vacationSpots = ['Bali', 'Paris', 'Tulum'];


for(let i = 0; i <vacationSpots.length; i ++){
  console.log('I would love to visit ' + vacationSpots[i])
}



bobsFollowers = ['ana', 'emilia', 'ailis','hikaru']

tinasFollowers =['ana', 'emilia', 'yolo']

mutualFollowers =[]

for(let i = 0; i <bobsFollowers.length; i++){
  for(let j = 0; j <tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutal = bobsFollowers[i] 
      mutualFollowers.push(mutal);
    }
  }
}
console.log(mutualFollowers)

// while loop

const cards = ['diamond', 'spade', 'heart', 'club'];

// do while loop 

let cupsOfSugarNeeded = 5

let cupsAdded  = 0

do{
  cupsAdded ++
  console.log(cupsAdded)
} while(cupsAdded < cupsOfSugarNeeded)
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i = 0; i < rapperArray.length; i ++){
	console.log(rapperArray[i])
  if(rapperArray[i] == 'Notorious B.I.G.'){
    break
  }
}

console.log("And if you don't know, now you know.")
