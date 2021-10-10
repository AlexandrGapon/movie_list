import { call, apply, takeEvery, put } from 'redux-saga/effects'
import { LOAD_MOVIES, LOAD_MOVIES_FAILURE, LOAD_MOVIES_SUCCESS } from '../../reducers/movies/actions'

export function* loadMoviesList({ payload }) {
    const { page, limit } = payload

    try {
        const request = yield call(
            fetch,
            `https://yts.mx/api/v2/list_movies.json?page=${page}&limit=${limit}`
        )
        const data = yield apply(request, request.json)
        yield put({
            type: LOAD_MOVIES_SUCCESS,
            payload: data.data
        })
    } catch (error) {
        yield put({
            type: LOAD_MOVIES_FAILURE,
            payload: error
        })
    }
}

export function* moviesSaga() {
    yield takeEvery(LOAD_MOVIES, loadMoviesList)
}