import { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

const ItemCount = ({ stock, id, precio, nombre }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(5);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, precio, nombre }];
      }
    });
  };

  return (
    <>
      <div className="Button-group">
        {count < 1 ? (
          <button class="signos material-symbols-outlined">exposure_neg_1</button>
        ) : (
          <button onClick={substractQty} class="signos material-symbols-outlined">
            exposure_neg_1
          </button>
        )}

        <div className="center">
          <button onClick={() => addToCart()}>
            Agregar al carro: {count}
          </button>
        </div>

        {count < stock ? (
          <button onClick={addQty} class="signos material-symbols-outlined">
            exposure_plus_1
          </button>
        ) : (
          <button class="signos material-symbols-outlined">exposure_plus_1</button>
        )}
      </div>
    </>
  );
};

export default ItemCount;
