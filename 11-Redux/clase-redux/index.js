
const {createStore} = require ('redux');    //traemos la funcion createStore

const {
    aumentarcount,
    cambiarintructor,
    modificaralumnos,
    sumaralumnos
    } = require('./actions')
    
    
const reducer = require('./reducer')
const store = createStore(reducer)        //crea el store y avisa que tiene un reducer

console.log(store.getState())                             //metodo qeu permite leer el valor actual

store.dispatch(aumentarcount())
console.log(store.getState())                             //metodo qeu permite leer el valor actual

store.dispatch(modificaralumnos())
console.log(store.getState())                             //metodo qeu permite leer el valor actual




