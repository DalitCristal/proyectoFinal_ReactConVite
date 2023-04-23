//STYLES
import "./Cart.css";
//HOOK
import { useContext } from "react";
//CONTEXT
import { CartContext } from "../../context/CartContext";
//COMPONENT
import CartItem from "../CartItem/CartItem";
//REACT ROUTER DOM
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <section className="cart">
        <h2 className="alert">El carrito de compras se encuentra vacio</h2>
        <Link to={"/"} className="option">
          Productos
        </Link>
      </section>
    );
  }

  return (
    <>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${total} </h3>
      <button onClick={() => clearCart()} className="btn">
        Vaciar carrito
      </button>
      <Link to="/checkout" className="option">
        Checkout
      </Link>
    </>
  );
};

export default Cart;
