const PI = Math.PI


const circleArea = function(radiusLength) {
  return PI * radiusLength * radiusLength
}

const squareArea = function(sideLength) {
  return sideLength * sideLength
}

module.exports = {circleArea, squareArea}
