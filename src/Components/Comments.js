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
        <button onClick={handleToggle}>{toggle ? "Hide" : "Comments"}</button>
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
                type="text"
                placeholder="Comment"
                name="comment"
                value={comment}
                onChange={(e) => {setComment(e.target.value)}}
                />

                <br/>

                <input 
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