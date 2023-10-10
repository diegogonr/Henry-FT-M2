
import { useEffect,useState } from "react"

const Contador =() =>{
    const [count, setCount] = useState(0);   //estados locales del componente

    const incrementar = () =>{

        setCount(count+1)
    }

    const decrementar = () =>{

        setCount(count-1)
    }
    
    useEffect(()=>{
        if(count == 5) setCount(0)
    
      },[count])

    return (
        <div>
            <h2>Contador</h2>
            <h3>{count}</h3>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
            <hr />
        </div>
    )
}

export default Contador;