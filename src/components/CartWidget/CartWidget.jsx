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
      style={{
        backgroundColor: "#4e4d4a",
        color: "#ffffff",
        padding: "0.5rem",
        borderRadius: "6px",
        textDecoration: "none",
        display: totalQuantity > 0 ? "block" : "none",
      }}
    >
      <ShoppingCartIcon />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
