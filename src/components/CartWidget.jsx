import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  //Función que cuenta lo que hay en el carrito
  const contador = cart.reduce((acc, curr) => {
    return acc + curr.cantidad;
  }, 0);

  return (
    <>
      <div className="container-widget">
        <span className=" icon material-symbols-outlined">shopping_cart</span>
        <span className="cart-counter">{contador}</span>
      </div>
    </>
  );
};

export default CartWidget;
