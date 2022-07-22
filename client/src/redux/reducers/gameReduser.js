import { GET_QUEST, GET_TOPIC } from "../actionTypes/gameAT";


const gameReduser =(state = {games:[], question: []}, action) =>{
    switch (action.type) {
        case GET_TOPIC:
            return {...state, games: action.payload}
        case GET_QUEST: 
        return {...state, question: action.payload}
    
        default:
            return state
    }
}

export default gameReduser