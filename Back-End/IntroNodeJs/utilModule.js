const trails = require('./trails.js');
const util = require('util')

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {    
      const foundTrail = trails[trail];    
      callback(null, foundTrail)
    } else {
      callback(new Error('Trail not found!'))
    }
  }, 1000);
}

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback (error, trailData) {
  if (error) {
    console.error(error.message)
    process.exit(1)
  } else {
    const mi = trailData.miles;   
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`)
  }
}

getTrailDistance('North Country', callback)

// Promisfy ver below

const getTrailDistancePromise = util.promisify(getTrailDistance)

getTrailDistancePromise('North Country')
  .then((trailData) => {
  const mi = trailData.miles
  const nickname = trailData.nickname
    console.log(`The ${nickname} is ${mi} miles long!`)
  })
  .catch((error) => {
    console.log(error)
  })

console.count() // to log how many timesw a functio is called

process.emitWarning() // to create and log a custom warning message to the terminal

os.freemem() // to check how much free system memroy is available in the learning evn

util.format() // to log a formatted object to the terminal
