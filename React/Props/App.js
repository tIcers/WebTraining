import React from "react";
import ReactDOM from "react-dom";

import PropsDisplayer from "./PropsDisplayer";

function App() {
  return <PropsDisplayer myProp="Hello" />;
}

export default App;


// Render a component's props

import React from 'react';
import Product from './Product'

function App() {
  return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />;
}

export default App;

// pass props to another component
import Player from './Player.js' 

function app(){
  return (
    <Player songName='waka' artist='vim' />
  )
}

export default app

// Render Differnt UL based on props
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>
        MovieFlix
      </h1>
      <Greeting name="Alison" signedIn = { false } />
    </div>
  );
}

export default App;



function App() {
  return <Button text =''/>;
}

export default App
