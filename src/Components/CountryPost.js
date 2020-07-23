import React, {useState} from 'react'
import Comments from './Comments'

const CountryPost = ({post, user, deleteFromPosts}) => {

    let [likes, setLikes] = useState(post.post_likes)

    let handleDelete = (e) => {
        fetch(`http://localhost:3000/posts/${post.id}`, {
            method: "DELETE"
        })
            .then(r => r.json())
            .then((deletedPost) => {
                deleteFromPosts(deletedPost)
            })
    }

    let handleLike = (e) => {
        fetch("http://localhost:3000/post_likes", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                user_id: user.id,
                post_id: post.id
                })
            })
                .then(r => r.json())
                .then((newLike) => {
                    setLikes((prevLikes) => {return [...prevLikes, newLike]})
                })
    }
 
    return (
        <div className="country-post-card">
            <h3 className="post-countryname">{post.country.name}</h3>

            <p>
                <img className="post-user-img" src={post.user.img} alt={post.user.username}/>
                {post.user.username}
            </p>
            
            <img className="post-img" src={post.img}/> 
            <h2>{post.title}</h2>
            <p>Category: {post.category}</p>
            <p>{post.post}</p>
            <div className="likes-comments-container">
                <button onClick={handleDelete} className="delete-post-button">❌</button>
                <button onClick={handleLike} style={{fontSize:"16px"}}>👍{likes.length} {""}</button>    
                <Comments 
                    comments={post.comments} 
                    postId={post.id}
                    userId={user.id}/>
            </div> 
        </div>
    )
}

export default CountryPost;