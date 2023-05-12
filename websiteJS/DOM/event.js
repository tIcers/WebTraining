let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharephoto = function(event) {
  event.target.style.display = 'none'
  text.innerHTML = 'something' + event.timeStamp + 'sec'
}

share.addEventListener('click', sharephoto)