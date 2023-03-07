import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

const CartForm = () => {
  const [cart, setCart] = useContext(CartContext);

  const deletId = cart.map((item) => {
    return item.id;
  });

  return (
    <>
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
                  onClick={() => console.log("eliminando")}
                >
                  Borrar
                </button>
              </div>
            </section>
          </div>
        );
      })}
      ;
      <div className="conteiner-form">
        <h2 className="contactanos"> Contáctanos</h2>

        <div className="container-two-parts">
          <div className="container-contact">
            <form action="">
              <p>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" />
              </p>
              <p>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
              </p>
              <p>
                <label htmlFor="tel">Teléfono</label>
                <input type="tel" name="Teléfono" id="tel" />
              </p>
              <p className="btn-message">
                <label htmlFor="mensaje">Escribenos algo</label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  cols="50"
                  rows="5"
                ></textarea>
              </p>
              <p className="btn-message">
                <button type="submit">Enviar</button>
              </p>
            </form>
          </div>
          <div className="container-info">
            <h3>Más información</h3>
            <ul>
              <li>
                <span class="more-info material-symbols-outlined">
                  signpost
                </span>
                <span> Calle 38A # 52 - 28 Medellín - Colombia</span>
              </li>
              <li>
                <span class="more-info material-symbols-outlined">
                  {" "}
                  mark_email_read
                </span>
                <span> martialdojo@gmail.com</span>
              </li>
              <li>
                <span class="more-info material-symbols-outlined">
                  {" "}
                  support_agent
                </span>
                <span> +57 315 775 55 55</span>
              </li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem
              suscipit natus soluta ullam inventore veritatis deleniti, adipisci
              a ipsa.
            </p>

            <h4>
              <Link to={"/"}>martialdojo.com</Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartForm;
