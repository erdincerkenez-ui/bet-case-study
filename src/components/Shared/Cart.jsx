import React from "react";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  // Toplam tutarı oranların çarpımı olarak hesapla
  const total =
    cartItems.length > 0
      ? cartItems.reduce((product, item) => product * (parseFloat(item.rate) || 1), 1)
      : 0; // Eğer hiçbir item yoksa toplam 0

  return (
    <div className="cart">
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.mbs} Kod:{item.code} Maç: {item.match}{" "}
            <strong>Oran: {item.rate}</strong>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <strong>Toplam Tutar: {total.toFixed(2)} TL</strong>
      </div>
    </div>
  );
};

export default Cart;
