let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken,
} = require("./indepenentPromiseLibrary.js.js");

async function serveDinner() {
  let vagetablePromise = steamBroccoli();

  let starchPromise = cookRice();

  let proteinPromise = bakeChicken();

  let sidePromise = cookBeans();

  console.log(
    `Dinner is served. We're having ${await vagetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`
  );
}

serveDinner();
