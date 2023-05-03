import { createContext, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { item, quantity }]);
      Toastify({
        text: "Producto agregado",
        className: "info",
        style: {
          background: "linear-gradient(to right, #d4ac78, #4e4d4a)",
        },
      }).showToast();
    } else {
      Toastify({
        text: "El producto ya fue agregado",
        className: "info",
        style: {
          background: "linear-gradient(to right, #d4ac78, #4e4d4a)",
        },
      }).showToast();
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.item.id === itemId);
  };

  const totalQuantity = cart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const total = cart.reduce(
    (acc, product) => acc + product.item.price * product.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, emptyCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
