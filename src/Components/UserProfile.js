import React, {useState, useEffect} from 'react'
import UserPosts from './UserPosts'
import UserBio from './UserBio'

const UserProfile = ({user}) => {

    let [userPosts, setUserPosts] = useState([])
    let [toggle, setToggle] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3000/users/${user.id}`)
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

    let handleClick = (e) => {
        setToggle((prevToggle) => {return !prevToggle})
    }

    return (
    <>
    {user.country ?
    <div className="profile-container">
        <div className="profile-left-container">
            <UserBio user={user} />
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