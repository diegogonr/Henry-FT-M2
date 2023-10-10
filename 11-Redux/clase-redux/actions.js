
//*Se escribe en cosntantes para evitar errores de tipeo
const {AUMENTAR_COUNT, CAMBIAR_INTRUSTOR, MODIFICAR_ALUMNOS, SUMAR_ALUMNOS } = require ('./action-types')

// store.dispatch ({type: 'AUMENTAR_COUNT'})                                                   //metodo dispash
// store.dispatch ({type: 'CAMBIAR_INTRUSTOR', payload: 'DIEGO'})                              //metodo dispash
// store.dispatch ({type: 'MODIFICAR_ALUMNOS', payload:["alumno 1", "alumnos2"]})              //metodo dispash
// store.dispatch ({type: 'SUMAR_ALUMNOS', payload:["alumno 4", "alumnos5"]})              //metodo dispash

//*funciones que retornan un objeto

const aumentarcount = () =>{
    return {type: AUMENTAR_COUNT}  
}
const cambiarintructor = () =>{
    return {type: CAMBIAR_INTRUSTOR, payload: 'DIEGO'}
}
const modificaralumnos = () =>{
    return  {type: MODIFICAR_ALUMNOS, payload:["alumno 1", "alumnos2"]}
}
const sumaralumnos = () =>{
    return {type: SUMAR_ALUMNOS, payload:["alumno 4", "alumnos5"]} 
}

module.exports = {
    aumentarcount,
    cambiarintructor,
    modificaralumnos,
    sumaralumnos
}