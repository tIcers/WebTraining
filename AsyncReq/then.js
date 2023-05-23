const { checkInventory } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2],
  ],
  giftcardBalance: 79.82,
};

checkInventory(order)
  .then((resolvedValueArray) => {})
  .then((resolvedValueArray) => {})
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
