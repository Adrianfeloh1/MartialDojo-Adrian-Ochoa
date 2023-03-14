import { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

const ItemCount = ({ stock, id, precio, nombre, img }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  //Función para sumar 1 a la card
  const sumar = () => {
    setCount(count + 1);
  };

  //Función para restar 1 a la card
  const restar = () => {
    setCount(count - 1);
  };

  //Función para agregar al Carrito
  const agregarAlCarrrito = () => {
    setCart((itemsCargados) => {
      const itemEncontrado = itemsCargados.find((item) => item.id === id);
      if (itemEncontrado) {
        return itemsCargados.map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad + count };
          } else {
            return item;
          }
        });
      } else {
        return [...itemsCargados, { id, cantidad: count, precio, nombre, img }];
      }
    });
  };

  return (
    <>
      <div className="Button-group">
        {count < 1 ? (
          <button className="signos material-symbols-outlined">exposure_neg_1</button>
        ) : (
          <button onClick={restar} className="signos material-symbols-outlined">
            exposure_neg_1
          </button>
        )}

        <div className="center">
          <button className="" onClick={() => agregarAlCarrrito()}>
            AGREGAR AL CARRITO: {count}
          </button>
        </div>

        {count < stock ? (
          <button onClick={sumar} className="signos material-symbols-outlined">
            exposure_plus_1
          </button>
        ) : (
          <button className="signos material-symbols-outlined">exposure_plus_1</button>
        )}
      </div>
    </>
  );
};

export default ItemCount;
