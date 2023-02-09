import React from 'react'
import CartWidget from './CartWidget';

const NavBar = () => {

  const categorias = ["Implementos Deportivos", "Ropa de Entrenamiento", "Accesorios"]

  return (
    <>
      <nav className='NavBar'>
        <h1>MartialDojo</h1>

        <ul className='menu-horizontal'>
          <li className='menu-productos'><a href="#">Nuestros Productos</a></li>
          <ul className='menu-vertical'>
            {categorias.map((menu) => (
              <li><a href="#">{menu}</a></li>
            ))}
          </ul>
        </ul>
        <CartWidget />
      </nav>
      
    </>

  )
}

export default NavBar;