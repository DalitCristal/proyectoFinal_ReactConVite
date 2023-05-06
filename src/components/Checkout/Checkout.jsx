//HOOK
import { useState, useContext } from "react";
//REFERENCIA A BASE DE DATOS
import { db } from "../../services/firebase/firebaseConfig";
//COMPONENTES
import Spinner from "../Spinner/Spinner";
//CONTEXT
import { CartContext } from "../../context/CartContext";
//FUNCIONES DE FIREBASE
import { addDoc, collection } from "firebase/firestore";
//STYLE
import "./Cheackout.css";

const Checkout = () => {
  const { cart, emptyCart, total } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmation) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConfirmation) {
      setError("Los campos del email no coinciden");
      return;
    }

    const orden = {
      items: cart.map((prod) => ({
        id: prod.item.id,
        nombre: prod.item.name,
        cantidad: prod.quantity,
      })),
      total: { total },
      nombre,
      apellido,
      telefono,
      email,
    };
    setLoading(true);
    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEmailConfirmation("");
        emptyCart();
      })
      .catch((error) => {
        console.error("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="containerFormu">
      <form onSubmit={handleSubmit}>
        <h2 className="tituloForm">Checkout</h2>

        <input
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          className="textField"
          placeholder="Nombre"
        />

        <input
          type="text"
          value={apellido}
          onChange={(event) => setApellido(event.target.value)}
          className="textField"
          placeholder="Apellido"
        />
        <input
          type="text"
          value={telefono}
          onChange={(event) => setTelefono(event.target.value)}
          className="textField"
          placeholder="Teléfono"
        />

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="textField"
          placeholder="Email"
        />

        <input
          type="email"
          value={emailConfirmation}
          onChange={(event) => setEmailConfirmation(event.target.value)}
          className="textField"
          placeholder="Confirmación de email"
        />

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="btnEnviar">
          Finalizar compra
        </button>
      </form>

      {loading ? (
        <Spinner />
      ) : ordenId ? (
        <strong>¡Gracias por tu compra! Tu numero de orden es {ordenId}</strong>
      ) : null}
    </div>
  );
};

export default Checkout;
