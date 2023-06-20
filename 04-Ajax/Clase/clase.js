    
//? Trae un array de objetos (usuarios) esto se guarda en response.
//? busca el elemento con id userslist y lo guardo
//? por cada objeto de response se crea un li y se le asigna su user.name
//? este elemento li se le pone como hijo al id userlist
//El símbolo "$" es comúnmente utilizado en bibliotecas y frameworks de JavaScript, como jQuery,

//Maneja la respuesta 
const responseHandler = (response)=>{

    //$ te entrega un array y queryselector el elemento
    const [userList] = $(`#usersList`)  //$(`#usersList`) =>jQueryselector entrega un array y uso [] para desestructuracion
    //const userList = document.querySelector('#usersList')

    // response un array de objetos 
    response.forEach(user => {
        const newLi = document.createElement('li');
        newLi.innerText = user.name;
        userList.appendChild(newLi);
    });
    // console.log(response)
}

const [loadUsers] = $(`#loadUsers`)   //query selector al boton

const fetchUsers = ()=>{
    $.get("https://jsonplaceholder.typicode.com/users", responseHandler )       
}

loadUsers.addEventListener('click',fetchUsers) // cargar usuarios al hacer click