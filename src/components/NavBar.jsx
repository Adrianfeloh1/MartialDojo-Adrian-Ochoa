import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {

  return (
    <>
      <div className='NavBar'>

        <h1>
          <Link to={"/"}>MartialDojo</Link>
        </h1>

        <ul className='menu-horizontal'>
          <li className='menu-productos'>
            <Link to={"/category/:id"}>Nuestros Productos</Link>
          </li>
          <ul className='menu-vertical'>
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
              <Link to={`/category/${"Accesorios"}`}>
                Accesorios
              </Link>
            </li>
          </ul>
        </ul>
        <CartWidget />
      </div>

    </>

  )
}

export default NavBar;