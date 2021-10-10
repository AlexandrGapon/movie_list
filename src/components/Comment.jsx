import React from 'react'
import { useDispatch } from 'react-redux'
import { DELETE_COMMENT } from '../store/reducers/comments/actions'
import '../styles/Comment.css'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'
import { parseDate } from '../utils/parseData'

const Comment = ({ id, body }) => {
    const dispatch = useDispatch()
    let date = parseDate(id)

    const removeComment = () => {
        dispatch({
            type: DELETE_COMMENT,
            payload: id
        })
    }

    return (
        <div className='comment'>
            <div className='comment__body'>
                <div className='comment__date'>
                    {date}
                </div>
                <div className='comment__text'>
                    {body}
                </div>
            </div>
            <PrimaryButton handleClick={removeComment}>Delete</PrimaryButton>
        </div>
    )
}

export default Comment