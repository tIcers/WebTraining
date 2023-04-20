const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';


function callMyNightSky(){
	return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;

}

console.log(callMyNightSky());

function logVisibleLightWaves(){
	const lightWaves = 'Moonlight';
	console.log(lightWaves);
}

logVisibleLightWaves()
console.log(logVisibleLightWaves());

const logVisibleLightWaves = () => {
	let lightWaves = 'Moonlight';
	let region = 'The Arctic';
	console.log(region);
	if(region ==='The Artctic'){
		let lightWaves = 'Northern Lights';
		console.log(lightWaves);
	}

	console.log(lightWaves);
  };
  
  logVisibleLightWaves();