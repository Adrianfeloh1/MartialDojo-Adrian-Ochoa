import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";
import { Link } from "react-router-dom";

const CartForm = () => {
  const [cart, setCart] = useContext(CartContext);

  //Función eliminando el producto
  const eliminarProducto = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Función calcular los totales de los productos
  const calcularPrecio = () => {
    let precioTotal = 0;
    cart.forEach((item) => {
      precioTotal += item.precio * item.quantity;
    });
    return precioTotal;
  };

  const calcularPrecioUnidad = (item) => {    
    return item.precio * item.quantity;
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
                  <h4 className="precio"> ${item.precio} COP</h4>
                  <h3 className="cantidad">Cantidad: {item.quantity}</h3>
                  <h3 className="subtotal">Total: ${calcularPrecioUnidad(item)}</h3>                  
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

      <div>        
        <h3 className="total-Compra">TOTAL DE LA COMPRA: $ {calcularPrecio()} COP</h3>
        
      </div>
      <hr />

      {cart.length > 0 ? (
        <SendOrder />
      ) : (
        <>
          <div className="container-icon">
            <span className="iconCart material-symbols-outlined">
              remove_shopping_cart
            </span>
            <h3 className="carrito-vacio ">Tu carrito está vacío</h3>
            <button className="volver-tienda animate__animated animate__fadeInUp">
              <Link to={"/"}>Volver a la tienda</Link>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CartForm;
