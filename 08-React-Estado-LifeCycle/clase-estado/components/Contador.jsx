import React from "react";

class Contador extends React.Component {
    constructor(props){
        super (props)
        this.state ={            //definiendo un estado de uso local
            counter: 0,
            saludo: 'hola'
        }
    }

    
    clickState =() =>{
        
        this.setState ({counter: this.state.counter +1,                 // para modificar el estado
                        saludo:  "actualizado"}, ()=>{                  //la segunda propiedad es un callback
                            console.log( this.state.counter)
                        })           
    }

    //? ETAPAS
    componentDidMount(){
        console.log("etapa de montaje")
    }

    componentDidUpdate(){
        console.log(`me actualize, el estado ahora es: ${this.state.counter} `)
    }

    componentWillUnmount(){
        console.log("etapa de desmontaje")
    }


    render(){
        return (
            <div>
                <h1>class Component</h1>
                <h3>{this.state.saludo}</h3>
                {/*  //con clase se trabaj con this */}
                <p>{this.state.counter}</p>   
                <button onClick={this.clickState}>Aumentar state</button>   

            </div>
        )
    }

}

export default Contador;