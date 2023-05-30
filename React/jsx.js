const p1 = <p id='large'>foo</p>
const p2 = <p id='small'>bar</p>

// nested JSX

const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);

// JSX Outer Elements
const blog = (
<div>
  <img src="pics/192940u73.jpg" />
  <h1>
    Welcome to Dan's Blog!
  </h1>
  <article>
    Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
  </article>
  </div>
);

// rendering JSX

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);/


//rendering jsx more

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('container')
const root = createRoot(container)
root.render(<h1>Hello world</h1>)
