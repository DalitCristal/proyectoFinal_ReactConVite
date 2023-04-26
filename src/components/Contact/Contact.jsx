//STYLE
import "./Contact.css";
//FORMIK
import { Formik } from "formik";
//YUP
import * as yup from "yup";

const yupSchema = yup.object({
  name: yup.string().min(1).max(40).required(),
  telefono: yup.string().min(9).max(15).required(),
  email: yup.string().email().required(),
});

const submitHandler = (values, resetForm) => {
  console.log(values);
  resetForm();
};

const ContactForm = () => {
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
            <h2>Form</h2>
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

export default ContactForm;
