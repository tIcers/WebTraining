import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

if(coinToss()==="heads"){
  img = <img src={pics.doggy}/>
}
  
}else {
  img = <img src={pics.kitty}/>
}

// you can also use ternaty operator

const img = <img src={pics[coinToss()==='heads' ? 'kitty' : 'doggy']} />;:w

root.render(img)
