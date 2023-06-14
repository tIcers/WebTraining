import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {

  const [cart, setCart] = useState([])
 

  const addItem = (item) => {
    const updatedCart = [...cart, item]
    setCart(updatedCart)
   };

  const removeItem = (targetIndex) => {
    const removedCart = cart.filter((_, index) => index !== targetIndex )
    setCart(removedCart)
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}

