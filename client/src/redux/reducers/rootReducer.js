import { combineReducers } from 'redux'
import gameReduser from './gameReduser'
import userReduser from './userReducer'


const rootReducer = combineReducers({
    game: gameReduser,
    user: userReduser
})

export default rootReducer
