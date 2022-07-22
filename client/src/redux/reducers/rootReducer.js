import { combineReducers } from 'redux'
import gameReduser from './gameReduser'
import userReduser from './userReducer'
import buttonReduser from './getButtonReduser'
import scoreReduser from './scoreReduser'




const rootReducer = combineReducers({
    game: gameReduser,
    user: userReduser,
    score: scoreReduser,
    button: buttonReduser
})

export default rootReducer
