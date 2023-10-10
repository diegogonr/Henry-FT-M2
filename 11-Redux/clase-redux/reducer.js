
const {AUMENTAR_COUNT, CAMBIAR_INTRUSTOR, MODIFICAR_ALUMNOS, SUMAR_ALUMNOS } = require ('./action-types')

const initialState= {
    count: 0,
    instructor: "",
    cohorte: '',
    alumnos:[]
}


const reducer = (state = initialState, action) =>{   //recibe el dispatch y permite cambiar los estados

    switch (action.type) {
     case AUMENTAR_COUNT:
            return{
                    ...state,
                    count: state.count +1
                  }
     case CAMBIAR_INTRUSTOR:
            return{
                    ...state,
                    instructor: action.payload
                  }
     case MODIFICAR_ALUMNOS:
            return{
                    ...state,
                    alumnos: action.payload
                  } 
     case SUMAR_ALUMNOS:
            return{
                    ...state,
                    alumnos: [...state.alumnos, ...action.payload]
                  }
                  
        default:
            return {...state}     //retorna el mismo estado
    }

}

module.exports = reducer;