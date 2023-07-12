import { animals } from "./animals";
import { createRoot } from "react-dom/client";
import { React } from "react";

const container = document.getElementById("app");
const root = createRoot(container);

const title = "";

const background = (
  <img className="background" alt="ocean" src="/image/ocean.jpg" />
);
const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}
const animalFacts = (
  <div>
    <h1>{title === "" && "Click an animal for a fun fact"}</h1>
    {background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

function displayFact(e) {
  const animalName = e.target.alt;
  const randomIndex = Math.floor(Math.random() * animals.facts.length);
  const animal = animals[animalName];
  const funFact = animal.facts[randomIndex];
  const factElement = document.getElementById("fact");
  factElement.innerHTML = funFact;
}
root.render(animalFacts);
