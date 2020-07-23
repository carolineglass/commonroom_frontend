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

    let handleDislike = (e) => {
        let postLikeId = likes.find((obj) => {
            return obj.user_id === user.id
        })

        fetch(`http://localhost:3000/post_likes/${postLikeId.id}`, {
            method: "DELETE"
            })
                .then(r => r.json())
                .then((deletedLike) => {
                    let updatedLikes = likes.filter((like) => {
                        return like.id !== deletedLike.id}
                      )
                    setLikes(updatedLikes)
                })
    }

    let hasMatch = Boolean(likes.find(obj=>{return obj.user_id === user.id}))
 
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

                {user.id === post.user.id
                ?
                <button onClick={handleDelete} className="delete-post-button">❌</button>
                :
                null
                }
                

                {hasMatch 
                ? 
                    <>
                     <button 
                     onClick={handleDislike} 
                     className="liked-button">
                     👍</button>
                     <span>CLICK TO UNLIKE</span>
                    </>
                 : 
                    <>      
                    <button 
                    onClick={handleLike} 
                    className="like-button">
                    👍</button>
                    <span>CLICK TO LIKE</span>
                    </>
                }
                
            <span>{" "}{likes.length}</span>
    
                <Comments 
                    comments={post.comments} 
                    postId={post.id}
                    userId={user.id}/>
            </div> 
        </div>
    )
}

export default CountryPost;