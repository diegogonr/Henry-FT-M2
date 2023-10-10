import { getCharacters, cleanCharacters } from "../redux/action";
import {useDispatch, useSelector} from 'react-redux';      //
import { useEffect } from "react";

const Characters = () =>{
    const dispatch = useDispatch();                                  //se puede despachar todo lo que se quiera
    const characters =  useSelector (state => state.characters)      //recibe una callback que tiene el estado global entero, y hace return implicito de solo characters

    useEffect(()=>{
        dispatch(getCharacters())                                    //se ejecuta la "action", es decir despacho getCharacters
        
        //el callback hace que no ejecute cuando se monto el componente
        return ()=>dispatch(cleanCharacters())  //cuando se desmonta el componente se ejecuta la función de retorno, es decir se vacia
    },[])

    return (
        <div>
            <h1>caracteres</h1>
            {
                characters?.map (character=>{
                    return (
                        <div key={character.id}>
                            <h3>{character.name}</h3>
                            <img src={character.image} alt={character.name} />
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Characters;