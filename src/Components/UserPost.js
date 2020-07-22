import React from 'react'
import Comments from './Comments.js'
import { useHistory } from "react-router-dom";

const UserPost = ({user, post, deleteFromPosts, addNewLike}) => {

    let history = useHistory()

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
                //whoever is signed in,
                post_id: post.id
                })
            })
                .then(r => r.json())
                .then((newLike) => {
                    addNewLike(newLike)
                })
        //POST REQUEST TO MAKE A POST LIKE 
        //addLike(newLike) in the .then to send to user profile 
    }

    return (
        <>
        {post.country ? 
            <div className="user-post-card">
            <h3 className="post-countryname" onClick={() => {history.push(`/country/${post.country.id}`)}}>
                {post.country.name}</h3>
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
                <button onClick={handleLike} style={{fontSize:"16px"}}>👍{post.post_likes.length} {""}</button>    
                <Comments comments={post.comments} postId={post.id}/>
            </div> 
        </div>
        :
        null
        }
        </>
    )
}

export default UserPost;