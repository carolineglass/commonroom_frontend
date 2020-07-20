import React from 'react'
import Comments from './Comments.js'

const UserPost = ({post}) => {

    // let [newComment, setnewComment] = useState("")

    // let handleSubmit = (e) => {
    //     e.preventDefault() 
        
    //     fetch("http://localhost:3000/comments", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //             "accept": "application/json"
    //         },
    //         body: JSON.stringify({
    //             comment: newComment,
    //             user_id: 7,
    //             //fix this (not hard coded)
    //             post_id: post.id
    //             })
    //         })
    //             .then(r => r.json())
    //             .then((fetchedComment) => {
    //                 console.log(fetchedComment)
    //             })
                    
    //     //FIGURE OUT with auth how to have the user_id in the post be set 
    //     //to the user that is signed in! 
    //     }

    return (
        <div className="user-post-card">
            <h3 className="post-countryname">{post.country.name}</h3>
            <h2>{post.title}</h2>
            <p>{post.category}</p>
            <p>{post.post}</p>
            <p style={{fontSize:"20px"}}>👍{post.post_likes.length}</p>
           
            <Comments comments={post.comments} postId={post.id}/>

            {/* <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Comment"
                name="comment"
                value={newComment}
                onChange={(e) => {setnewComment(e.target.value)}}
                />

                <br/>

                <input 
                type="submit"
                value="Add Comment"
                />
            </form> */}

        </div>
    )
}

export default UserPost;