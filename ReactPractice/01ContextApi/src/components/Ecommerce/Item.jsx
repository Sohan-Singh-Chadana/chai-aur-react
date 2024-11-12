import React from "react";
import { useCart } from "../../context/Cart";

function Item({ name, price, src }) {
  const { items, setItems } = useCart();
  const handleAddItem = () => {
    const itemAlreadyExists = items.some((item) => item.name === name);

    if (!itemAlreadyExists) {
      setItems([...items, { name: name, price: price }]);
    } else {
      alert("Item is already exists ");
    }
  };
  return (
    <div className="item-card">
      <img
        src={src}
        alt={name}
        width={250}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={handleAddItem}>Add To Cart</button>
    </div>
  );
}

export default Item;
