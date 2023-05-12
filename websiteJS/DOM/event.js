let social = document.getElementById("social-media");
let share = document.getElementById("share-button");
let text = document.getElementById("text");

// Write your code below
let sharephoto = function (event) {
  event.target.style.display = "none";
  text.innerHTML = "something" + event.timeStamp + "sec";
};

share.addEventListener("click", sharephoto);

//Event Type
let randomColor =
  "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";
// This variable stores the "Pick a Color" button
let button = document.getElementById("color-button");

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById("next-button");

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event) {
  button.style.backgroundColor = randomColor;
}

button.addeventlistener("click", colorChange);

mysteryButton.addEventListener("wheel", colorChange);

// Mouse events

// These variables store the boxes on the side
let itemOne = document.getElementById("list-item-one");
let itemTwo = document.getElementById("list-item-two");
let itemThree = document.getElementById("list-item-three");
let itemFour = document.getElementById("list-item-four");
let itemFive = document.getElementById("list-item-five");
let resetButton = document.getElementById("reset-button");

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function () {
  itemOne.style.width = "";
  itemTwo.style.backgroundColor = "";
  itemThree.innerHTML = "The mouse must leave the box to change the text";
  itemFive.style.display = "none";
};
resetButton.onclick = reset;

// Write your code here

function increaseWidth() {
  itemOne.style.width = "400px";
}

itemOne.addEventListener("mouseover", increaseWidth);

function changeBackground() {
  itemTwo.style.backgroundColor = "blue";
}

itemTwo.addEventListener("mouseup", changeBackground);

function changeText() {
  itemThree.innerHTML = "The mouse has left the element";
}

itemThree.addEventListener("mouseout", changeText);

function showItem() {
  itemFive.style.display = "block";
}

itemFour.addEventListener("mousedown", showItem);
