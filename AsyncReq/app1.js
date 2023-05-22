const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

// Write your code below:
function myExecutor(resolve, reject) {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out");
  }
}

function orderSunglasses() {
  return new Promise(myExecutor);
}

const orederPromise = orderSunglasses();

console.log(orederPromise);
