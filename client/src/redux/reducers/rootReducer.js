import { combineReducers } from 'redux'
import gameReduser from './gameReduser'



const rootReducer = combineReducers({
    game: gameReduser

})

export default rootReducer