import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store.js';

import { App } from './app/App.js';
// Import the store here.

// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <App 
     state = {state.getState()}
     dispatch = {state.dispatch}
    />,
    document.getElementById('root')
  )
};
store.Subscribe(render())
render()
