
import { useState, useEffect } from "react";   //HOOK DE ESTADOS, ciclo de vida



//? HOOKS: Funciones de react, solo se usan en componentes funcionales

const Counter =()=>{
    let[count, setCount ] = useState(0)    //estado, funcion que permite modificar el estado (setState) = useState(valor inicial)
    const[saludo, setSaludo ] = useState("Holi")
    const[objet, setObject ] = useState({
        despedida: "chau",
        descuento : 10
    })

    useEffect(()=>{
        console.log("ciclo de vida del montaje")

        return ()=>alert('bye')         //se muestra cuando se desmonta
    },[count])                         //primer parametro: Callback, segundo: array de dependencias


    const handleClick = () => {
        setCount(count+1)
        console.log(count)
    } 

    return(
        <div>
            <h1>FUNCTION COMPONENT</h1>
            <p>{count}</p>
            <button onClick={handleClick}>Aumentar</button>
        </div>
    )
}
export default Counter;