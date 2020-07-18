import React from 'react'
import UserPost from './UserPost'

const UserProfile = ({users}) => {

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
                <p>{users[0].from}</p>
                <p>{users[0].age}</p>
                <p><strong>Bio:</strong> {users[0].bio}</p>
            </div> 
        </div>
         
        <div className="profile-right-container">
            <button>Posts</button>
            <button>Map</button>
            {users[0].posts.map((post) => {
                return (
                <UserPost key={post.id} post={post}/>
                )
            })}
            
        </div>
    </div>
    :    
    null  
    }
    </>
    )
}

export default UserProfile;