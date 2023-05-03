import React from "react";
import { useState, useContext } from "react";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Spinner from "../Spinner/Spinner";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  writeBatch,
} from "firebase/firestore";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [ordenId, setOrdenId] = useState([]);

  const { cart, total, emptyCart } = useContext(CartContext);

  const createOrder = async ({ name, telefono, email }) => {
    setLoading(true);

    try {
      const objOrden = {
        buyer: {
          name,
          telefono,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stockDb;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const ordenRef = collection(db, "ussers");

        const ordenAdded = await addDoc(ordenRef, objOrden);

        setOrdenId(ordenAdded.id);
        emptyCart();
      } else {
        console.error("hay productos que estan fuera de stock");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se esta generando su orden, aguarde un moemnto por favor</h1>;
  }

  if (ordenId) {
    return <h1>El id de su compra es: {ordenId} </h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      {loading ? <Spinner /> : <CheckoutForm onConfirm={createOrder} />}
    </div>
  );
};

export default Checkout;
