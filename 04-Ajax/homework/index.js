

const viewUsers = (response)=>{
    const [userList] = $(`#lista`)  
    userList.innerText=''    //vacio la lista
    // response un array de objetos 
    response.forEach(user => {
        const newLi = document.createElement('li');
        newLi.innerText = user.name;
        userList.appendChild(newLi);
    });
}

const searchUsers = ()=>{

    const [input] = $(`#input`)
    const [textSpan]= $(`#amigo`)  
    $.get("http://localhost:5000/amigos/"+ input.value, function(response){
        textSpan.innerText = response.name; 
    })
    input.value = ''   //vacio el input
}

const deleteUsers = ()=>{
    const [inputDelete] = $(`#inputDelete`)
    const id = inputDelete.value

    $.ajax({
        type:'DELETE',
        url: "http://localhost:5000/amigos/"+ id,
        success: (response) => {
            viewUsers(response)
            const[success] = $('#success');
            success.innerText = "amigo borrado"
        }
    })

    inputDelete.value=''

}



const users = () => {
    $(`#lista`).empty();   //metodo de array que vacia la lista, limpiar y carga otra vez
    $.get("http://localhost:5000/amigos",viewUsers)
}


const [botonView] = $(`#boton`)                 //query selector al boton
botonView.addEventListener('click',users) // cargar usuarios al hacer click

const [search] = $(`#search`)                 //query selector al boton
search.addEventListener('click',searchUsers)    

const [deleteUser] = $(`#delete`)                 //query selector al boton
deleteUser.addEventListener('click',deleteUsers)    