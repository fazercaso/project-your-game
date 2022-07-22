import { combineReducers } from 'redux'
import gameReduser from './gameReduser'
import buttonReduser from './getButtonReduser'
import scoreReduser from './scoreReduser'



const rootReducer = combineReducers({
    game: gameReduser,
    score: scoreReduser,
    button: buttonReduser

})

export default rootReducer