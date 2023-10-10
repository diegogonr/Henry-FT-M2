
import { useState } from "react"


const Form = () =>{

    const [form, setForm] = useState({
        email:'',
        password: ''
    })
    const [errors, setErrors] = useState({
        email:'',
        password: ''
    })

    //* Actualizar estado
    const handleOnChange = (event) =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value      // ejemplo: email: 'diego@'  ; .name: nombre del input
        })
        validate()
    }

    //*validar correo
    const validate = () =>{
        if(!/\S+@\S+\.\S+/.test(form.email)) {               //rejex para verificar
            setErrors({
                ...errors,
                email: 'revisa email'
            })
        } else {
            setErrors({
                ...errors,
                email: ''
            })
        }
    }
    
    const hableOnSubmit =(event)=>{
        event.preventDefault();  //evita que se recargue la pagina

    }


    return (
        // evento se ejecuta cuando se da click al boton
        <form onSubmit={hableOnSubmit}>  
            <h1>Hola, formulario</h1>

            <label htmlFor="email">Email:  </label>
                <input name = "email" type="email" placeholder="ingresa tu email" value={form.email} onChange={handleOnChange} />
            <hr />
            {errors.email && <p>{errors.email}</p>}

            <label htmlFor="password">Password:  </label>
                <input  name = "password" type="text" placeholder="ingrese tu password"  value={form.password} onChange={handleOnChange}/>
            <hr />

            <button disabled= {!form.email || !form.password || errors.email || errors.password}>ENVIAR</button>
        </form>

    )

}

export default Form;