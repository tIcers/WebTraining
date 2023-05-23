const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2],
];

function handleSuccess(resolvedValue) {
  console.log(resolvedValue);
}

function handleFailure(rejectionValue) {
  console.log(rejectionValue);
}

checkInventory(order).then(handleSuccess, handleFailure);
