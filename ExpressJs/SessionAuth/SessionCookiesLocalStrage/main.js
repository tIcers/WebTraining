function selectProfile(name){
  if (name != localStorage.getItem('profile')) {
    alert("Now setting character to... " + name)
  }
  localStorage.setItem('profile', name)
}

function loadProfile(){
  var character = localStorage.getItem('profile');

  if (character) {
    display_character(character)
  }
}

function display_character(name) {
  var img = document.createElement('img');
  img.src = images.get(name);
  document.getElementById('character').appendChild(img);
} 

function loadHome(){
  if (localStorage.getItem('profile')) {
    display_character(name)
  }
}


/*
                Cookies vs localStorage vs sessionStorage 

Read by Server - Yes        Yes             No
Capacity -      4KB/Domain  10MB/Domain     5MB/Domain
Expiry -        Custom      Never or manual when session tab closes 
Browser Comp -  HTML4/5     HTML5           HTML5 
Access from -   Any Window  Any Window      Same Tab
 */
