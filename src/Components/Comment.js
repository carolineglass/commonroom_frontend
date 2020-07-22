import React from 'react'

const Comment = ({comment}) => {
    return (
        <>
        <div className="comment">
            <p> <img src={comment.user.img} alt={comment.user.username}/>
            {comment.user.username}</p>
            <p>{comment.comment}</p>
        </div>
        <br></br>
        </>
    )
}

export default Comment;