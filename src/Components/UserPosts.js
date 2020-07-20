import React from 'react'
import UserPost from './UserPost'

const UserPosts = ({posts}) => {
    
    return (
        <div>
            {posts.map((post) => {
                return (
                <UserPost key={post.id} post={post}/>
                )
                })}
        </div>
    )
}

export default UserPosts;