import React, {useState} from 'react'
import UserPosts from './UserPosts'

const UserProfile = ({users}) => {

    let [toggle, setToggle] = useState(false)

    let handleClick = (e) => {
        setToggle((prevToggle) => {return !prevToggle})
    }

    return (
    <>
    {users[0] ?
    <div className="profile-container">
        <div className="profile-left-container">
            <div className="user-bio">
                <img className="user-img" 
                    src="https://ca.slack-edge.com/T02MD9XTF-U011R2GNC77-9c120100f0b3-512" 
                    alt={users[0].full_name} 
                    />
                
                    {/* add img source from database */}

                <h1>{users[0].full_name}</h1>
                <h3 className="username">{users[0].username}</h3>
                <p>Currently in <strong>{users[0].country.name}</strong></p>
                <p>From <strong>{users[0].from}</strong></p>
                <p>{users[0].age}</p>
                <p><strong>Bio:</strong> {users[0].bio}</p>
                <p><strong>Favorite Food:</strong> {users[0].answer}</p>
            </div> 
        </div>
         
        <div className="profile-right-container">
        <button
            className="toggle-button"
            onClick={handleClick}>
                {toggle ? "Posts" : "Map"}
        </button>
            
            {/* if the toggle is true the map will show up 
            else the users posts will be displayed */}

            {toggle ? 
            <h1>MAP COMPONENT GOES HERE</h1>
            :
            <UserPosts posts={users[0].posts}/>
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