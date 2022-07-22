import { GET_SCORE } from "../actionTypes/gameAT"



const scoreReduser =(state = {scores: 0}, action) =>{
    switch (action.type) {
        case GET_SCORE:
            console.log(action.payload);
            return {...state, scores:  state.scores + action.payload };
        default:
            return state
    }
}

export default scoreReduser