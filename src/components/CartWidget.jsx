import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const contador = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <div>
        <span class=" icon material-symbols-outlined">shopping_cart</span>
        <span className="cart-counter">{contador}</span>
      </div>
    </>
  );
};

export default CartWidget;
