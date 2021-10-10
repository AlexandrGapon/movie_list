import { combineReducers } from 'redux'
import { commentsReducer } from './comments'
import { moviesReducer } from './movies'

export const rootReducer = combineReducers({
    movies: moviesReducer,
    comments: commentsReducer
})