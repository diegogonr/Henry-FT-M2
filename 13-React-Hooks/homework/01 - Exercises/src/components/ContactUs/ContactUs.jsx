import React from "react";
import { useDispatch } from "react-redux";
import { enviarForm } from "../../redux/actions/actions";

const ContactUs = () => {
  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const dispatch = useDispatch();

  const handleInput =(event) =>{
    console.log(form)
    setForm(
      {
        ...form,
        [event.target.name]: event.target.value
      }
    )
  }

  const handleSubmit =(event) =>{
    event.preventDefault();  //evita que se recargue la pagina
    dispatch(enviarForm(form))
    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    })

  }

  return (
    <div>
      <form className="contactBg" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input onChange={handleInput} name="nombre" />
        <label htmlFor="email">Email: </label>
        <input onChange={handleInput} name="email" />
        <label htmlFor="asunto">Asunto: </label>
        <input onChange={handleInput} name="asunto" />
        <label htmlFor="mensaje">Mensaje: </label>
        <input onChange={handleInput} name="mensaje" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
