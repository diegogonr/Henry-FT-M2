
const buttonAgregar = document.querySelector('#agregar')

const clickHandler = function () {
    const contenedor = document.querySelector ('#contenedor')

    const newDiv= document.createElement('div')     //crea un elemento
    newDiv.innerText ='Hola'                        //agrega texto
    newDiv.className ='recuadro'                     //agrega clase
    contenedor.appendChild (newDiv)                  //agregar un hijo

    newDiv.addEventListener ('click', cambiarColor)
    
}
const cambiarColor = function (event) {
    console.log(event.target)
    const elemento = event.target                   // me envia al elemento mismo <div class="recuadro">hola</div>
    if (elemento.className === 'recuadro'){
        elemento.className = 'recuadroVerde'
    } else elemento.className = 'recuadro'
}

buttonAgregar.addEventListener('click', clickHandler)

