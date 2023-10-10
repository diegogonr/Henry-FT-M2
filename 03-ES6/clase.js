


//********** */ ARROW FUNCTIONS //////////////////
const numbers =[1,2,3,4,5,6,7,8]
const multiplos=[]

numbers.forEach(element => {
    if(element %2==0) multiplos.push (element)
});
console.log(multiplos)


//?Tienen return implicito
//? si utilizo llaves se usa return, sino el return esta implicito
const saludo =(saludo) => {        
    console.log('hola' + saludo)};

saludo("diego")


let bob ={
    name:'bob',
    friends:[],
    printf(){
        this.friends.forEach(element => {
            console.log(this.name + " conoce a "+ element);  //gracias al arrorfunct el this hace referencia al contexto de bob
        });
    },
    printf2(){
        this.friends.forEach(function(element) {
            console.log(this.name + " conoce a "+ element);  //esta funcion genera un nuevo contexto
        });
    }
}
bob.friends.push("diego")
bob.friends.push("JUAN")

bob.printf()
bob.printf2()    


//********** */ OBJETOS LITERALES  //////////////////

const obj = (name) => {
    let object = {name}

    return object;
}
console.log(obj('diego'))



//********** */ TEMPLATE STRING //////////////////
const saludo2 = (saludo) => {
    // return 'asd' + saludo
    return `dasdasd ${saludo}`
}

//********** */ DESTRUCTURING //////////////////
let array = [9,7,8,2]
let obj2 = {cohorte:'FT', clase: '39a', alumnos: {instructor: 'asd'}}

let [a, ,b] = array
console.log(a,b)

let {cohorte} = obj2
let {alumnos:{instructor}} = obj2
console.log(cohorte)
console.log(instructor)


//********** */ DEFAULT +REST +SPREAD //////////////////

function one (x, y =12) {return (x+y)}
console.log(one(1))

const two =(x,...y) => x*y.length
console.log(two(3, 'hola', 400, 'holi', 4)) // ...y guarda todos los demás argumentos en un array -> y.length =4

function tree(x,y,z) { return x+ y +z}
console.log(tree(...[1,2,3]))

