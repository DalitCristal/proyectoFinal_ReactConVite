//STYLE
import "./Contact.css";
//FORMIK
import { Formik } from "formik";
//YUP
import * as yup from "yup";
//Base de datos
import { db } from "../../services/firebase/firebaseConfig";
//Funciones de firebase
import { collection, addDoc } from "firebase/firestore";
//Toastify
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const yupSchema = yup.object({
  name: yup.string().min(1).max(40).required(),
  telefono: yup.string().min(9).max(15).required(),
  email: yup.string().email().required(),
  consulta: yup.string().required(),
});

const submitHandler = (values, resetForm) => {
  addDoc(collection(db, "consultas"), {
    ...values,
  });
  Toastify({
    text: "Consulta enviada con éxito!",
    className: "info",
    position: "center",
    style: {
      background: "linear-gradient(to right, #d4ac78, #4e4d4a)",
    },
  }).showToast();
  resetForm();
};
const initialValues = {
  name: "",
  telefono: "",
  email: "",
  consulta: "",
};
const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
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
            <h3 className="tituloForm"> Formulario de consultas</h3>
            <p>
              Completa el formulario y nos contactaremos contigo a la brevedad.
            </p>
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
            <textarea
              name="consulta"
              type="consulta"
              className="textarea"
              placeholder="Consulta"
              value={values.consulta}
              onChange={handleChange}
            />
            {errors.consulta && (
              <span style={{ color: "red" }}>{errors.consulta} </span>
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

export default ContactForm;
