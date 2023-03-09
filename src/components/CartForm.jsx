import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";

const CartForm = () => {
  const [cart, setCart] = useContext(CartContext);

  const eliminarProducto = ((id) => {
    setCart(cart.filter((item) => item.id !== id))
  })
  

  return (
    <>
      <div className="main-catalogue">
        {cart.map((item) => {
          return (
            <div key={item.id} className="container__cards">
              <section className="card">
                <div className="cover__card">
                  <img src={item.img} alt="saco" />
                </div>
                <h4>{item.nombre}</h4>
                <div className="footer__Card">
                  <h4 className="precio">$ {item.precio} COP</h4>
                  <h3>Cantidad: {item.quantity}</h3>
                  <button
                    className="btn"
                    onClick={() => eliminarProducto(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </section>
            </div>
          );
        })}
        ;
      </div> 

      <SendOrder />
    </>
  );
};

export default CartForm;
