
import { AUMENTAR_CONTADOR, GET_USERS } from "./action-types";

const initialState = {
    contador: 0,
    users: [],
    user: {}

}

const reducer = (state = initialState, action) =>{

    switch (action.type) {
        case AUMENTAR_CONTADOR:
            return {...state,
                    contador: state.contador+1        
            }
        case GET_USERS:
            return {...state,
                    users: action.payload      
            }           
    
        default:
            return {...state};
    }

}

export default reducer;