import React from 'react'

const Comment = ({comment, setComments, postId, userId, postUserId, deleteComment}) => {

    let handleDelete = (e) => {
        fetch(`http://localhost:3000/comments/${comment.id}`, {
            method: "DELETE"
        })
            .then(r => r.json())
            .then((deletedComment) => {
                deleteComment(deletedComment)
            })
    }

    return (
        <>
        <div className="comment">
            <p> <img src={comment.user.img} alt={comment.user.username}/>
            {comment.user.username}</p>
            <p>{comment.comment}</p>
            {userId === postUserId || userId === comment.user.id
                ?
                <button onClick={handleDelete}>❌</button>
                :
                null
            }
        </div>
        <br></br>
        </>
    )
}

export default Comment;