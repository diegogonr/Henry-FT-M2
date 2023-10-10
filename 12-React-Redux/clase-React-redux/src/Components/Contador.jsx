import React from "react"
import { connect } from "react-redux";   //para acceder al store
import {aumentarContador} from "../redux/actions" 

class Contador extends React.Component {
//*Lo que retorna las 2 funciones de connect lo recibo por props
    constructor (props) {           //se recibe el estado contador ya que esta connect
        super(props)                //props { contador: 0, aumentarContador: fn()}
        console.log(this.props)
    }

//*CADA vez que hay un cambio en el props o en el estado local, se renderiza el componente
    render(){
        return(
            <>
                <h1>CONTADOR: </h1>
                <h3>acá se emuestra el contador</h3>
                
                <h3>{this.props.contador}</h3>      
                <button onClick={this.props.aumentarContador}>AUMENTAR</button>
            </>

        )
    }

}

const mapStatetoProps =(state) => {     //recibe el estado global completo
    return{                                 
        contador: state.contador        //retorno solo la propiedad que requiero en este componente
    }
}


const mapDispatchToProps =(dispatch) => {
    return {
        aumentarContador: () => dispatch (aumentarContador())   // dispatch (type:AUMENTAR_CONTADOR)
    }
}

export default connect(              //permite que este atento al estado global
    mapStatetoProps,                //permite acceder al estado global
    mapDispatchToProps              //despachar acciones
)(Contador);



