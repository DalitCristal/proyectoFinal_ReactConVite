//STYLES
import "./CartWidget";
//ICONO
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//HOOK
import { useContext } from "react";
//CONTEXT
import { CartContext } from "../../context/CartContext";
//REACT ROYTER DOM
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart, totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className="cartWidget"
      style={{ display: totalQuantity > 0 ? "block" : "none" }}
    >
      <ShoppingCartIcon />
      <strong>{totalQuantity}</strong>
    </Link>
  );
};

export default CartWidget;
