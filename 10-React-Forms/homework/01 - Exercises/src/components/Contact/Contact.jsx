import React, { useState } from 'react'
import './Contact.modules.css'
import { error } from '@11ty/eleventy/src/EleventyErrorHandler';
// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;



export function validate(inputs){
  let errors= {}
  if (inputs.name === ""){
      errors.name = "Se requiere un nombre"
  }
  if (!regexEmail.test(inputs.email)){
    errors.email = "Debe ser un correo electrónico"
  }
  if(inputs.message === ""){
    errors.message = "Se requiere un mensaje"
  }

  return errors;
}



export default function Contact () {
  
  const [inputs, setInputs] = React.useState({
      name:"",
      email: "",
      message: ""
    }
  )

  const [errors, setErrors] = React.useState({
    name:"",
    email: "",
    message: ""
    }
  )
  
  const handleChange = (event) => {
    setInputs(
      {...inputs,
        [event.target.name]: event.target.value
      }
    )
    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value
       }
      )
    )
  }

  const handleSubmit =(event) =>{
    if(Object.values(errors).length==0){
      console.log("Datos completos")
      setInputs(
        {
          name:"",
          email: "",
          message: ""
        }
      )
      setErrors(
        {
            name:"",
            email: "",
            message: ""
         
        }
      )

      alert("Datos completos");
    } else {
      alert('Debe llenar todos los campos');

    }
    event.preventDefault();

  }



  return (
    
    <form onSubmit={handleSubmit} className='boxform'>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input name='name' type="text" placeholder='Escribe tu nombre...' value={inputs.name} onChange={handleChange} className={errors.name && 'warning'}/>

        {errors.name && <p className='danger'>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input name='email' type="text" placeholder='Escribe tu email...' value={inputs.email} onChange={handleChange}  className={errors.email && 'warning'}/>
        {errors.email && <p className='danger'>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea name='message' type="text" placeholder='Escribe tu mensaje...' value={inputs.message}onChange={handleChange}  className={errors.message && 'warning'} />
        {errors.message && <p className='danger'>{errors.message}</p>}
      </div>
      <button type='submit'>Enviar</button>
    </form>
    
  )
}
