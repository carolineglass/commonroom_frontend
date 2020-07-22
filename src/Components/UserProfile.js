import React, {useState, useEffect} from 'react'
import UserPosts from './UserPosts'

const UserProfile = ({user}) => {

    let [userPosts, setUserPosts] = useState([])
    let [toggle, setToggle] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/users/9")
          .then(resp => resp.json())
          .then((LoggedInUser) => {
            setUserPosts(LoggedInUser.posts)
          })
      }, [])

    let deleteFromPosts = (deletedPost) => {
      let updatedPosts = userPosts.filter((post) => {
          return post.id !== deletedPost.id}
        )
      setUserPosts(updatedPosts)
    }

    //FIX THIS IN THE MORNING -> Likes are not rendering without a refresh
    console.log(userPosts)
    let addNewLike = (newLike) => {
        console.log(newLike)
        let postId = newLike.post_id
        let postToBeUpdated = userPosts.filter((post) => {
            return post.id === postId}
        )
        // found the post in UserPosts that needs to be updated
        // need to push the newLike into postToBeUpdated.post_likes array of {post_like OBJs}
        // setUserPosts((prevUserPosts) => {return [...prevUserPosts, newLike]})
    }

    let handleClick = (e) => {
        setToggle((prevToggle) => {return !prevToggle})
    }

    return (
    <>
    {user.country ?
    <div className="profile-container">
        <div className="profile-left-container">
            <div className="user-bio">
                <img className="user-img" 
                    src={user.img}
                    alt={user.full_name} 
                    />
                
                    {/* add img source from database */}

                <h1>{user.full_name}</h1>
                <h3 className="username">{user.username}</h3>

                <p>Currently in <strong>{user.country.name}</strong></p>
                
                <p>From <strong>{user.from}</strong></p>
                <p>{user.age}</p>
                <p><strong>Bio:</strong> {user.bio}</p>
                <p><strong>Favorite Food:</strong> {user.answer}</p>
            </div> 
        </div>
         
        <div className="profile-right-container">
        <button className="toggle-button" onClick={handleClick}>
            {toggle ? "Posts" : "Map"}
        </button>
            
            {/* if the toggle is true the map will show up 
            else the users posts will be displayed */}

            {toggle ? 
            <h1>MAP COMPONENT GOES HERE</h1>
            :
            <UserPosts
                user={user}
                posts={userPosts}
                deleteFromPosts={deleteFromPosts}
                addNewLike={addNewLike}
                />
            }

        </div>
    </div>
    :    
    null  
    }
    </>
    )
}

export default UserProfile;