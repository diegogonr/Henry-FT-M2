const { createStore } = require("redux");

const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
const store= createStore(contador);

// Obtenemos el elemento con el id `valor`.
const valor = document.querySelector('#valor');   //numero a incrementar

//? Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
//? En el primer render y cada vez que nos subscribamos al Store.
//? Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  const counter = store.getState().contador    //devuelve todo el objeto por eso el .contador
  valor.innerHTML = counter;                   //
  console.log(store.getState())
}


// Ejecutamos la función 'renderContador':
renderContador()

//? Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador)         //accede a la informacion del store, la función render contador va a estar atenta a los cambios de store
                                        // la función se ejecutará cada vez que el estado del almacén cambie

//? Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
//? hagan un dispatch al store de la acción correspondiente:
let buttonInc = document.querySelector('#incremento');
buttonInc.addEventListener('click', ()=> store.dispatch(incremento()))       //se ejecuta porque es igual al valor de retorno (objeto); el dispatch lo recibe el reducer contador

let buttonDec = document.querySelector('#decremento');
buttonDec.addEventListener('click', ()=> store.dispatch(decremento())) 











