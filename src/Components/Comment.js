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
            <div className="comment-img-and-button">
                <div><p> <span className="comment-user-background"><img src={comment.user.img} alt={comment.user.username}/>
                {" "}
                {comment.user.username}</span></p>
                </div>
                
            {userId === postUserId || userId === comment.user.id
                ?
                <button className="comment-delete-button" onClick={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" 
                            width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" 
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                </button>
                :
                null
            }
            </div>

            <div className="comment-content">
                <p>{comment.comment}</p>
            </div>
            
            
        </div>
        </>
    )
}

export default Comment;