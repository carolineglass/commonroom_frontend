import React from 'react'

const UserPost = ({post}) => {
    console.log(post.comments)
    return (
        <div className="user-post-card">
            <h1>{post.title}</h1>
            <p>{post.category}</p>
            <p>{post.post}</p>
            <p>Likes: {post.post_likes.length}</p>
            <p>Comments: </p>
        </div>
    )
}

export default UserPost;