import React, {useState} from 'react'
import Comment from './Comment'

const Comments = (props) => {

    let [comment, setComment] = useState("")
    let [comments, setComments] = useState(props.comments)
    let [toggle, setToggle] = useState(false)

    let handleToggle = (e) => (
        setToggle((prevToggle) => {return !prevToggle})
    )

    let deleteComment = (deletedComment) => {
        let updatedComments = comments.filter((comment) => {
            return comment.id !== deletedComment.id}
          )
        setComments(updatedComments)
    }

    let handleSubmit = (e) => {
        e.preventDefault() 
        
        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                comment: comment,
                user_id: props.userId,
                post_id: props.postId
                })
            })
                .then(r => r.json())
                .then((fetchedComment) => {
                    setComments((prevComments) => {return [...prevComments, fetchedComment]})
                    setComment("")
                    console.log(fetchedComment)
                })
        }

    return (
        <>
        <button onClick={handleToggle} className="comment-button">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle" 
        width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" 
        stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
        <line x1="12" y1="12" x2="12" y2="12.01" />
        <line x1="8" y1="12" x2="8" y2="12.01" />
        <line x1="16" y1="12" x2="16" y2="12.01" />
        </svg></button>

        {comments.length}

        {toggle
        ?
        <div className="comments-container">
        {comments.map((comment) => {
            return <Comment 
                key={comment.id} 
                comment={comment}
                setComments={setComments}
                postId={props.postId}
                postUserId={props.postUserId}
                userId={props.userId}
                deleteComment={deleteComment}/>
        })}
    
            <form onSubmit={handleSubmit}>
                <input
                className="comment-form"
                type="text"
                placeholder="Comment"
                name="comment"
                value={comment}
                onChange={(e) => {setComment(e.target.value)}}
                />

                <br/>

                <input
                className="submit-button" 
                type="submit"
                value="Add Comment"
                />
            </form>
        </div>
        :
            null
        }
       </>
    )
}

export default Comments;