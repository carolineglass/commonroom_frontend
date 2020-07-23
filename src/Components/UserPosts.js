import React from 'react'
import UserPost from './UserPost'

const UserPosts = ({user, posts, deleteFromPosts}) => {
    
    return (
        <div>
            {posts.map((post) => {
                return (
                <UserPost 
                    key={post.id} 
                    user={user}
                    post={post}
                    deleteFromPosts={deleteFromPosts}
                    />
                )
                })}
        </div>
    )
}

export default UserPosts;