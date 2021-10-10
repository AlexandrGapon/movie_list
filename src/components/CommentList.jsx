import React from 'react'
import '../styles/CommentList.css'
import Comment from './Comment'

const CommentList = ({ movieComments }) => {
    if (movieComments.length === 0) {
        return (
            <div className='noncomments'>
                <h2>No comments yet</h2>
            </div>
        )
    }

    return (
        <>
            {movieComments.map(comment => <Comment
                key={comment.id}
                id={comment.id}
                body={comment.body}
            />
            )}
        </>
    )
}

export default CommentList