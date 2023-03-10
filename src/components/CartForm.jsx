import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";
import { Link } from "react-router-dom";

const CartForm = () => {
  const [cart, setCart] = useContext(CartContext);

  //Rendering condicional para el fomulario
  const mostrarComponente = true;

  //Función eliminando el producto
  const eliminarProducto = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="main-catalogue">
        {cart.map((item) => {
          return (
            <div key={item.id} className="container__cards">
              <section className="card">
                <div className="cover__card">
                  <img src={item.img} alt="cardForm" />
                </div>
                <h3>{item.nombre}</h3>
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

      {cart.length > 0 ? (
        <SendOrder />
      ) : (
        <>
          <div className="container-icon">
            <span class="iconCart material-symbols-outlined">
              remove_shopping_cart
            </span>
            <h3 className="carrito-vacio ">Tu carrito está vacío</h3>
            <button className="volver-tienda animate__animated animate__fadeInUp" >
              <Link to={"/"}>Volver a la tienda</Link>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CartForm;
