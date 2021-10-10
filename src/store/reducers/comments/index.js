import { ADD_COMMENT, DELETE_COMMENT } from './actions'


const initialCommentsState = {
    comments: []
}

export const commentsReducer = (state = initialCommentsState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const { movieId, id, body } = action.payload

            return {
                ...state,
                comments: [...state.comments, {
                    movieId: movieId,
                    id: id,
                    body: body
                }]
            }

        case DELETE_COMMENT:
            return {
                state,
                comments: state.comments.filter(comment => comment.id !== action.payload)
            }

        default:
            return state
    }
}