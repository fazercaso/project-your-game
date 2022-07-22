import { GET_BUTTON} from "../actionTypes/gameAT"



const buttonReduser =(state = {buttons: {id: 1, statusbut: true}}, action) =>{
    switch (action.type) {
        case GET_BUTTON:
            console.log(action.payload);
            return {...state, scores:  state.scores + action.payload };
        default:
            return state
    }
}

export default buttonReduser