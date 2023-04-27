//COMPONENT
import ItemCount from "../ItemCount/ItemCount.jsx";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
//CONTEXT
import { CartContext } from "../../context/CartContext.jsx";
//HOOK
import { useState, useContext } from "react";
//REACT ROUTER DOM
import { Link } from "react-router-dom";
//STYLE
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = { id, name, price };

    addItem(item, quantity);
  };

  return (
    <>
      <Card className="card">
        <div>
          <CardMedia component="img" image={img} alt={name} className="img" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Categoría:</strong> {category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong> Description: </strong>
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Precio:</strong> ${price}
            </Typography>
          </CardContent>
        </div>
        {quantityAdded > 0 ? (
          <Link to={"/cart"} className="finalizarCompra">
            Ver carrito
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </Card>
    </>
  );
};

export default ItemDetail;
