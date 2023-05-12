let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharephoto = function(event) {
  event.target.style.display = 'none'
  text.innerHTML = 'something' + event.timeStamp + 'sec'
}

share.addEventListener('click', sharephoto)


//Event Type
let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  button.style.backgroundColor = randomColor
}

button.addeventlistener('click', colorChange)

mysteryButton.addEventListener('wheel', colorChange)