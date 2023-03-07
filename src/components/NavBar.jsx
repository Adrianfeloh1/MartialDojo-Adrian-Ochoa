import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <h1 className="animate__animated animate__zoomIn">
          <Link to={"/"}>MartialDojo</Link>
        </h1>

        <ul className="menu-horizontal">
          <li className="menu-productos">
            <Link to={"/"}>Nuestros Productos</Link>
          </li>
          <ul className="menu-vertical">
            <li>
              <Link to={`/category/${"Implementos Deportivos"}`}>
                Implementos Deportivos
              </Link>
            </li>
            <li>
              <Link to={`/category/${"Ropa de Entrenamiento"}`}>
                Ropa de Entrenamiento
              </Link>
            </li>
            <li>
              <Link to={`/category/${"Accesorios"}`}>Accesorios</Link>
            </li>
          </ul>
        </ul>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </div>
    </>
  );
};

export default NavBar;
