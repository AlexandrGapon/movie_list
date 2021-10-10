import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { ADD_COMMENT } from '../store/reducers/comments/actions'
import { getMovieInfo, parseComments } from '../utils/parseData'
import '../styles/CommentsPage.css'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'
import CommentList from '../components/CommentList'
import { Link } from 'react-router-dom'

const CommentsPage = () => {
    const router = useHistory()
    const dispatch = useDispatch()
    const { comments } = useSelector(state => state.comments)
    const { movies } = useSelector(state => state.movies)
    const [value, setValue] = useState('')

    const movieId = router.location.pathname.replace('/comments/', '')
    let { url: coverUrl, title, year } = getMovieInfo(movies, movieId)
    let movieComments = parseComments(comments, movieId)

    const addComment = () => {
        dispatch({
            type: ADD_COMMENT,
            payload: {
                movieId,
                id: Date.now(),
                body: value
            }
        })
        setValue('')
    }

    return (
        <div className='commentsPage'>
            <div className='comments__header'>
                <div>
                    <div className='comments__title'>{`${title} (${year})`}</div>
                    {coverUrl && <img src={`${coverUrl}medium-cover.jpg`} alt='Movie cover' />}
                </div>
                <div className='comment__form'>
                    <textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder='Write your comment'
                    />
                    {value && <PrimaryButton handleClick={addComment}>Add comment</PrimaryButton>}
                </div>
                <Link className='backLink' to={'/'}>To Movie List</Link>
            </div>
            <CommentList movieComments={movieComments} />
        </div>
    )
}

export default CommentsPage