//COMPONENT
import Item from "../Item/Item";
//STYLE
import "./ItemList.css";
//HOC
import { productConIva } from "../CustomHoc/ProductsConIva";

const ItemList = ({ products }) => {
  const ProductConIVA = productConIva(Item);

  return (
    <div className="listGroup">
      {products.map((prod) => {
        return <ProductConIVA key={prod.id} {...prod} />;
      })}
    </div>
  );
};

export default ItemList;
