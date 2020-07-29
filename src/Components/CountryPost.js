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

            <div className="top-div">
                <p className="post-user-container">
                    <img className="post-user-img" src={post.user.img} alt={post.user.username}/>
                    {post.user.username}
                </p>
                <div className="country-flag-container">
                    <h3 className="post-countryname">{post.country.name}</h3>
                    <img className="post-flag" src={post.country.flag} />
                </div>
            </div>

            <div className="img-and-content-container"> 

                <div className="post-img-container">
                    <img className="post-img" src={post.img}/> 
                </div>

                    <div className="post-content-container">
                        
                        <p className="postdate">{post.date_created}</p>
                        <h2 className="post-title">{post.title}</h2> 
                        <p className="category">{post.category}</p>
                        <p>{post.post}</p>

                        <div className="likes-comments-container">

                            {hasMatch 
                            ? 
                                <>
                                <button 
                                onClick={handleDislike} 
                                className="liked-button">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                class="icon icon-tabler icon-tabler-heart" 
                                width="30" height="30" viewBox="0 0 24 24" stroke-width="3" 
                                stroke="#F44336" fill="none" 
                                stroke-linecap="round" 
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                                </svg></button>
                                {/* <span>CLICK TO UNLIKE</span> */}
                                </>
                            : 
                                <>      
                                <button 
                                onClick={handleLike} 
                                className="like-button">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                class="icon icon-tabler icon-tabler-heart" 
                                width="30" height="30" viewBox="0 0 24 24" stroke-width="1" 
                                stroke="#F44336" fill="none" 
                                stroke-linecap="round" 
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                                </svg></button>
                                </>
                            }

                            {likes.length}

                            <Comments 
                                comments={post.comments}
                                postUserId={post.user.id} 
                                postId={post.id}
                                userId={user.id}/>

                            {user.id === post.user.id
                            ?
                            <button onClick={handleDelete} className="delete-post-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" 
                            width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" 
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
                    </div>  
 
                </div> 

                
        </div>
    )
}

export default CountryPost;