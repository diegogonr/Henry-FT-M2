import React from "react"
import { connect } from "react-redux";
import { getUsers } from "../redux/actions";

class Cards extends React.Component {

    constructor (props) {
        super(props)
        console.log(this.props)
    }

    componentDidMount(){  //componente de clase cuando te montes
        this.props.getUsers()
        console.log(this.props.getUsers())
    }

    render(){
        return(
            <>
                <h1>COMPONENTE DE CLASE SMART </h1>
                {
                    this.props.users?.map(user =>{
                        return(
                            <ul key={user.id}>
                                {user.name}
                            </ul>
                        )
                    })
                }
            </>

        )
    }
}

const mapStatetoProps =(state) => {     //recibe el estado global
    return{
        users: state.users
    }
}


const mapDispatchToProps =(dispatch) => {
    return {
        getUsers: () =>{dispatch(getUsers())}
    }
}

export default connect(             //permite que este atento al estado global
    mapStatetoProps,                //permite acceder al estado global
    mapDispatchToProps              //despachar acciones
)(Cards);