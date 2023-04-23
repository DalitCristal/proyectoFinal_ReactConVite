//COMPONENTS
import ItemList from "../ItemList/ItemList.jsx";
import Spinner from "../Spinner/Spinner.jsx";
//FIREBASE
import { db } from "../../services/firebase/firebaseConfig.js";
import { collection, query, getDocs, where } from "firebase/firestore";
//HOOKS
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//STYLES
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const q = query(collection(db, "products"));

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
          };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);
  return (
    <div className="container">
      <h1 className="titulo">{greeting}</h1>
      <ItemList products={products} />
      {loading ? <Spinner /> : null}
    </div>
  );
};

export default ItemListContainer;
