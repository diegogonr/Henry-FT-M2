
import React from "react";  //para trabajar con clases

class Boton_clase extends React.Component{   //esta clase es un componente de react
    constructor(props){
        super(props)                //propiedades que recibe
    }

    render(){               // metodo render 
        return(
            <>
                <button>{this.props.texto}</button>
            </>
        )
    }    
}

export default Boton_clase;