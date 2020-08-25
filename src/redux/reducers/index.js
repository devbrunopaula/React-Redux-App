import { userReducer } from './userReducer'
import { sidebarReducer } from './sidebarReducers'
import { combineReducers } from 'redux'


export const rootReducer = combineReducers({
    user: userReducer,
    sidebar: sidebarReducer
})