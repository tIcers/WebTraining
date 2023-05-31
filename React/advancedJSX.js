// class vs className
import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);

const myDiv = (
  <div className="big">I AM A BIG DIV</div>;
)

root.render(myDiv)

// self-CLosing Tags

// you always need to close tags, no self-closing tags like html bc jsx has to be 
// complied for javascript code
const profile = (
  <div>
    <h1>John Smith</h1>
    <img src="images/john.png"/>
    <article>
      My name is John Smith.
      <br/>
      I am a software developer.
     <br/>
      I specialize in creating React applications.
    </article>
  </div>
);

// curly braces in JSX


import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
root.render(<h1>{2 + 3}</h1>);
