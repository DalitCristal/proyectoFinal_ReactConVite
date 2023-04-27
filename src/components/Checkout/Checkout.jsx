import React, { useState } from "react";
import { db } from "../../services/firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const handlerForm = (event) => {
    event.preventDefault();

    addDoc(collection(db, "ussers"), {
      nombre: nombre,
      telefono: telefono,
      email: email,
    });

    setNombre("");
    setTelefono("");
    setEmail("");
  };
  return (
    <form onSubmit={handlerForm}>
      <label htmlFor="">Nombre</label>
      <input
        type="text"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />

      <label htmlFor="">Telefono</label>
      <input
        type="text"
        value={telefono}
        onChange={(event) => setTelefono(event.target.value)}
      />

      <label htmlFor="">email</label>
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Checkout;
