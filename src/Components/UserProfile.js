import React, {useState} from 'react'
import UserPosts from './UserPosts'

const UserProfile = ({user}) => {

    let [toggle, setToggle] = useState(false)

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
            <UserPosts posts={user.posts}/>
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