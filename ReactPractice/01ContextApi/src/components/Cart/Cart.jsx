import React from "react";
import { useCart } from "../../context/Cart";

const Cart = ({ setPopup }) => {
  const { items, setItems } = useCart();

  //   const total = items.reduce((acc, current) => acc + current.price, 0);

  let total = 0;

  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }

  const removeItems = (itemName) => {
    setItems(items.filter((item, i) => item.name !== itemName));
  };

  return (
    <div className="container">
      <div className="cart" style={{ textAlign: "right" }}>
        <button
          style={{ position: "absolute", top: "2px", right: "5px" }}
          onClick={() => setPopup(false)}
        >
          close
        </button>

        <h1
          style={{
            padding: "1.5rem",
            userSelect: "none",
            textAlign: "center",
            backgroundColor: "white",
            fontSize: "2rem",
            textTransform: "uppercase",
            letterSpacing: "3px",
          }}
        >
          Cart Items
        </h1>
        {items.length === 0 ? (
          <div
            style={{
              fontSize: "2rem",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
            }}
          >
            Cart is Empty
          </div>
        ) : (
          <ul style={{ listStyle: "none" }}>
            {items &&
              items.map((item, i) => (
                <li
                  className="itemname"
                  style={{
                    width: "430px",
                    margin: "8px auto ",
                    textAlign: "left",
                    backgroundColor: "cadetblue",
                  }}
                  key={i}
                >
                  &nbsp; {i + 1}. {item.name} - ${item.price}
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      removeItems(item.name);
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        )}

        <h5>
          Total Bill: <span style={{ color: "Gold" }}>${total}</span>
        </h5>
      </div>
    </div>
  );
};

export default Cart;
