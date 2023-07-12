let fasterShip = {
	'color':'sliver',
	'Fuel Type':'Turbo Fuel'
}

// let spaceship = {
// 	homePlanet: 'Earth',
// 	color: 'silver',
// 	'Fuel Type': 'Turbo Fuel',
// 	numCrew: 5,
// 	flightPath: ['Venus', 'Mars', 'Saturn']
//   };
    
  let crewCount = spaceship.numCrew

  let planetArray = spaceship.flightPath


  let spaceship = {
	'Fuel Type' : 'Turbo Fuel',
	homePlanet : 'Earth',
	color: 'silver',
	'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  
  spaceship.color = 'glorious gold'
  spaceship['numEngines'] = 7
  delete spaceship["Secret Mission"]

  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat(){
    console.log(retreatMessage)
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}


alienShip.retreat()
alienShip.takeOff()

// nested objects

let spaceship = {
	passengers: null,
	telescope: {
	  yearBuilt: 2018,
	  model: "91031-XLT",
	  focalLength: 2032 
	},
	crew: {
	  captain: { 
		name: 'Sandra', 
		degree: 'Computer Engineering', 
		encourageTeam() { console.log('We got this!') },
	   'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
	},
	engine: {
	  model: "Nimbus2000"
	},
	nanoelectronics: {
	  computer: {
		terabytes: 100,
		monitors: "HD"
	  },
	  'back-up': {
		battery: "Lithium",
		terabytes: 50
	  }
	}
  }; 
  
let capFave = spaceship.crew.captain['favorite foods'][0]

spaceship.passengers = [{name: 'Space Dog'}]

let firstPassenger = spaceship.passengers[0]


let spaceship = {
	'Fuel Type' : 'Turbo Fuel',
	homePlanet : 'Earth'
  };

function greenEnergy(object){
	object['Fuel Type'] = 'avocado oil'
}

function remotelyDisable(object){
	object.disabled= true

}

greenEnergy(spaceship)
remotelyDisable(spaceship)

console.log(spaceship)


let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let member in spaceship.crew){
  console.log(`${member}: ${spaceship.crew[member].name}`)
}


for (let crewMember in spaceship.crew) {
	console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
  };
  
  