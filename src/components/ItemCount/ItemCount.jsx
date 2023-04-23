//STYLES
import "./ItemCount.css";
//HOOK
import { useState } from "react";

const ItemCount = ({ initial, onAdd, stock }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter">
      <div className="controls">
        <button className="btn" onClick={decrement}>
          -
        </button>
        <strong className="number">{quantity}</strong>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
      <div className="add">
        <button
          className="btn"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
