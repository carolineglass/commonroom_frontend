import React from 'react'
import UserPost from './UserPost'

const UserPosts = ({user, posts, deleteFromPosts, foundUserPosts, foundUser, selectedUserId}) => {
    
    return (
        <div>
            {user.id === selectedUserId
            ?
            <>
            {posts.map((post) => {
                return (
                <UserPost 
                    key={post.id} 
                    user={user}
                    selectedUserId={selectedUserId}
                    post={post}
                    deleteFromPosts={deleteFromPosts}
                    />
                )
                })}
            </>
            :
            <>
            {foundUserPosts.map((post) => {
                return (
                <UserPost 
                    key={post.id} 
                    user={user}
                    selectedUserId={selectedUserId}
                    post={post}
                    deleteFromPosts={deleteFromPosts}
                    />
                )
                })}
            </>
            }
            
        </div>
    )
}

export default UserPosts;