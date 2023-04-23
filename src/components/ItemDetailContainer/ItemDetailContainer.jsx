//STYLES
import "./ItemDetailContainer.css";
//COMPONENTS
import ItemDetail from "../ItemDetail/ItemDetail";
//CUSTOM HOOKS
import { productConIva } from "../CustomHoc/ProductsConIva";
//HOOKS
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//FIREBASE
import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const ProductConIVA = productConIva(ItemDetail);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", id);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="ItemDetailContainer" key={id}>
      <ProductConIVA {...product} />
    </div>
  );
};

export default ItemDetailContainer;
