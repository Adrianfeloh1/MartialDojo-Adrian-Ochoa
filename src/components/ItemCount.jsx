import { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

const ItemCount = ({ stock, id, precio, nombre, img }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  console.log(cart)

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
        return [...currItems, { id, quantity: count, precio, nombre, img }];
      }
    });
  };

  return (
    <>
      <div className="Button-group">
        {count < 1 ? (
          <button className="signos material-symbols-outlined">exposure_neg_1</button>
        ) : (
          <button onClick={substractQty} className="signos material-symbols-outlined">
            exposure_neg_1
          </button>
        )}

        <div className="center">
          <button onClick={() => addToCart()}>
            Comprar: {count}
          </button>
        </div>

        {count < stock ? (
          <button onClick={addQty} className="signos material-symbols-outlined">
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
