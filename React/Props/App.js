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
