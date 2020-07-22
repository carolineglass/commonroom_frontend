import React from 'react'
import Comments from './Comments'

const CountryPost = ({post, deleteFromPosts}) => {

    let handleDelete = (e) => {
        fetch(`http://localhost:3000/posts/${post.id}`, {
            method: "DELETE"
        })
            .then(r => r.json())
            .then((deletedPost) => {
                deleteFromPosts(deletedPost)
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
                <button style={{fontSize:"16px"}}>👍{post.post_likes.length} {""}</button>    
                <Comments comments={post.comments} postId={post.id}/>
            </div> 
        </div>
    )
}

export default CountryPost;