import { AUMENTAR_CONTADOR, GET_USERS } from "./action-types";

export const aumentarContador = () => {
    return {type:AUMENTAR_CONTADOR}
}

//hay doble dispachs el primero que se ejecute la función (peticion a la API) y el segundo que le manda el objeto al reducer 
//data es la respuesta de la api
export const getUsers = () => {   //petición a Api
    return function(dispatch) {   //siempre retorna una fn()
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())   //parsea la respuesta - pasar a js 
        .then (data => dispatch({
            type: GET_USERS, payload: data 
        }))
    }
}