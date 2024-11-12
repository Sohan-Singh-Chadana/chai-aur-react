import React, { useState } from "react";
import Item from "../Ecommerce/Item";
import Cart from "../Cart/Cart";
import { useCart } from "../../context/Cart";
import { createPortal } from "react-dom";

function Example2() {
  const { items } = useCart();
  const imgUrl = [
    "https://www.apple.com/newsroom/images/product/mac/standard/Apple_macbookpro-13-inch_screen_05042020_big.jpg.large.jpg",
    "https://saboocomputers.com/wp-content/uploads/2022/06/HP-32-GB-2.0-METAL-BODY-PENDRIVE-1.jpg",
    "https://5.imimg.com/data5/PX/WQ/MN/SELLER-38271709/mobile.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsCh5cbtAfW3HrD-NxAv850-HCr3sdaTsOA&s",
  ];

  const [popup, setPopup] = useState(false);

  return (
    <>
      <div className="btnContent">
        <button onClick={() => setPopup(true)} style={{ position: "relative" }}>
          Cart <span className="span">{items.length}</span>
        </button>
      </div>
      <div className="example2">
        <Item name="MacBook Pro" price={100000} src={imgUrl[0]} />
        <Item name="Pendrive" price={4000} src={imgUrl[1]} />
        <Item name="Mobile" price={25000} src={imgUrl[2]} />
        <Item name="Speaker" price={5000} src={imgUrl[3]} />
      </div>
      {popup && createPortal(<Cart setPopup={setPopup} />, document.body)}
    </>
  );
}

export default Example2;
