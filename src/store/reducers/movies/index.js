import { parseMovies } from '../../../utils/parseData'
import { LOAD_MOVIES, LOAD_MOVIES_FAILURE, LOAD_MOVIES_SUCCESS } from './actions'


const initialMoviesState = {
    page: 1,
    limit: 10,
    moviesCount: null,
    isLoading: false,
    error: null,
    movies: []
}

export const moviesReducer = (state = initialMoviesState, action) => {
    switch (action.type) {
        case LOAD_MOVIES:
            const {page, limit} = action.payload

            return {
                ...state,
                isLoading: true,
                page,
                limit
            }
        
        case LOAD_MOVIES_SUCCESS:
            const {movies, movie_count} = action.payload
            
            return {
                ...state,
                isLoading: false,
                moviesCount: movie_count,
                movies: parseMovies(movies)
            }

        case LOAD_MOVIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state
    }
}