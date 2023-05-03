//STYLE
import "./CheckoutForm.css";
//FORMIK
import { Formik } from "formik";
//YUP
import * as yup from "yup";
//HOOKS
import { useState, useEffect } from "react";
//Base de datos
import { db } from "../../services/firebase/firebaseConfig";
//Funciones de firebase
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const yupSchema = yup.object({
  name: yup.string().min(1).max(40).required(),
  telefono: yup.string().min(9).max(15).required(),
  email: yup.string().email().required(),
});

const submitHandler = (values, resetForm) => {
  addDoc(collection(db, "ussers"), {
    ...values,
  });
  resetForm();
};

const CheckoutForm = () => {
  const [ordenId, setOrdenId] = useState([]);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          telefono: "",
          email: "",
        }}
        onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
        validationSchema={yupSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isValid,
          dirty,
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <h3 className="tituloForm"> Formulario de validación</h3>
            <input
              name="name"
              type="text"
              className="textField"
              placeholder="Name y Apellido"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span style={{ color: "red" }}>{errors.name} </span>
            )}
            <input
              name="telefono"
              type="text"
              className="textField"
              placeholder="Teléfono"
              value={values.telefono}
              onChange={handleChange}
            />
            {errors.telefono && (
              <span style={{ color: "red" }}>{errors.telefono} </span>
            )}

            <input
              name="email"
              type="email"
              className="textField"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email} </span>
            )}

            <button
              type="submit"
              className={!(isValid && dirty) ? "btnDisable" : "btnEnviar"}
            >
              Enviar
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CheckoutForm;
