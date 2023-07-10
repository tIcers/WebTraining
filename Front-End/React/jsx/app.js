// import React from "react";
// import { createRoot } from "react-dom/client";
//
// const container = document.getElementById("app");
// const root = createRoot(container);
//
// const math = <h1> 2 + 3 = {2 + 3}</h1>;
//
// root.render(math);

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const theBestString = "This text was accessed through a javascript variable";

root.render(<h1>{theBestString}</h1>);

//variabel attributes in JSX

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const goose =
  "https://content.codecademy.com/courses/React/react_photo-goose.jpg";

const gooseImg = <img src={goose} />;

root.render(gooseImg);

//Event listners in JSX

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute(
    "src",
    "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg"
  );
  e.target.setAttribute("alt", "doggy");
}

const kitty = (
  <img
    onclick={makeDoggy}
    src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
    alt="kitty"
  />
);

root.render(kitty);

// .map in JSX
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const people = ["Rowe", "Prevost", "Gare"];

const peopleList = people.map((person, i) => (
  <li key={"person" + i}>{person}</li>
));

// root.render goes here:
root.render(<ul>{peopleList}</ul>);

// you can write code without using jsx

const greatestDivEver = React.createElement("div", null, "i am div");
