//STYLE
import "./Item.css";
//COMPONENTS
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
//REACT ROUTER DOM
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
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
              <strong>Precio:</strong> ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Cantidades disponible:</strong> {stock}
            </Typography>
          </CardContent>
        </div>
        <Link to={`/item/${id}`} className="option">
          Más detalles
        </Link>
      </Card>
    </>
  );
};

export default Item;
