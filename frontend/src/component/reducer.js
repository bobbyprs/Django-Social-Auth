import {combineReducers} from 'redux'
import authReducer from './authReducer'
import userDetailsReducer from './userDetailsReducer'

export default combineReducers({
    auth:authReducer,
    userDetails : userDetailsReducer
})