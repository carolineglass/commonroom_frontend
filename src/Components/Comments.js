import React, {useState} from 'react'
import Comment from './Comment'

const Comments = (props) => {

    let [comment, setComment] = useState("")
    let [comments, setComments] = useState(props.comments)
    let [toggle, setToggle] = useState(false)

    let handleToggle = (e) => (
        setToggle((prevToggle) => {return !prevToggle})
    )

    let handleSubmit = (e) => {
        e.preventDefault() 
        
        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                comment,
                user_id: 7,
                //fix this (not hard coded)
                post_id: props.postId
                })
            })
                .then(r => r.json())
                .then((fetchedComment) => {
                    setComments((prevComments) => {return [...prevComments, fetchedComment]})
                    setComment("")
                })
                    
        //FIGURE OUT with auth how to have the user_id in the post be set 
        //to the user that is signed in! 
        }

    return (
        <>
        <button onClick={handleToggle}>{toggle ? "Hide Comments" : "View Comments"}</button>
        {toggle
        ?
        <div className="comments-container">
        {comments.map((comment) => {
            return <Comment key={comment.id} comment={comment}/>
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