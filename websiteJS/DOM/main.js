document.body.innerHTML =
  "<h1>This is now the heading of the body element</h1>";

document.getElementById("first").innerHTML =
  "<h1>Most popular Harry Potter characters</h1>";

document.getElementById("fourth").innerHTML = "Professor Snape";

document.getElementsByClassName("slytherin")[0].innerHTML = "Salazar Slytherin";

document.getElementsByTagName("li")[0].innerHTML = "Dobby";

// Traversing the DOM
const first = document.body.children[0];

first.innerHTML = "BROWN BEARS ARE AWESOME!";

first.parentNode.style.backgroundColor = "beige";

let newAttraction = document.createElement("li");

newAttraction.id = "vespa";

newAttraction.innerHTML = "Rent a Vespa";

document.getElementById(":italy-attractions").appendChild(newAttraction);
