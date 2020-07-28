import React, {useState, useEffect} from 'react'
import UserPosts from './UserPosts'
import UserBio from './UserBio'

const UserProfile = ({user, countries, setUser, selectedUserId}) => {

    let [userPosts, setUserPosts] = useState([])
    let [foundUser, setFoundUser] = useState({})
    let [foundUserPosts, setFoundUserPosts] = useState([])
    let [foundUserCountry, setFoundUserCountry] = useState("")
    let [toggle, setToggle] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3000/users/${user.id}`)
          .then(resp => resp.json())
          .then((LoggedInUser) => {
            setUserPosts(LoggedInUser.posts)
          })

          fetch(`http://localhost:3000/users/${selectedUserId}`)
            .then(resp => resp.json())
            .then((fetchedUser) => {
                setFoundUser(fetchedUser)
                setFoundUserCountry(fetchedUser.country.name)
                setFoundUserPosts(fetchedUser.posts)
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

        //     <div className="country-page-container">
        //     <div className="country-title">
        //         <h1>{country.name}</h1>
        //     </div>
            
        //     <div className="users-filter-posts">
        //             <div className="country-users-container">
        //                     <h3>Travelers in {country.name}</h3>
        //                         {country.current_users.map(user => {
        //                         return <CountryUser 
        //                             key={user.id} 
        //                             user={user}/>
        //                         })}
        //             </div>
        //         <div className="country-users-posts-container"> 
        //             <div className="filter-and-add">
        //                 <AddPostForm 
        //                     user={user} 
        //                     country={country} 
        //                     addNewPost={addNewPost}
        //                     />
        //                 <CategoryFilter 
        //                     filterSearchTerm={filterSearchTerm}
        //                     changeFilterSearchTerm={changeFilterSearchTerm}
        //                     />
        //             </div>
        //                 <div className="country-posts-container">
        //                     {countryPosts.length === 0 ? 
        //                         <h2>Be the first to post!</h2>
        //                     :
        //                     filterByCategory().map(post => {
        //                     return <CountryPost 
        //                                 key={post.id} 
        //                                 post={post} 
        //                                 deleteFromPosts={deleteFromPosts}
        //                                 user={user}
        //                             />
        //                     })
        //                     }
        //                 </div>
        //         </div>
        //     </div> 
        // </div>

    return (
    <>
    {user.country && selectedUserId
    ?
        <>
        {user.id === selectedUserId   
        ? 
            <div className="profile-container">

                <div className="profile-left-container">
                    <UserBio
                        user={user}
                        countries={countries}
                        setUser={setUser} 
                        selectedUserId={selectedUserId}/>
                </div>
                <div className="profile-right-container">
                
                    <UserPosts
                        user={user}
                        posts={userPosts}
                        deleteFromPosts={deleteFromPosts}
                        foundUser={foundUser}
                        foundUserPosts={foundUserPosts}
                        selectedUserId={selectedUserId}
                        />
                </div>
            </div>
        :
            <div className="profile-container">
                
                <div className="profile-left-container">
                    <UserBio
                        foundUser={foundUser}
                        foundUserCountry={foundUserCountry} 
                        user={user}
                        countries={countries}
                        setUser={setUser} />
                </div>
            
                <div className="profile-right-container">

                <UserPosts
                    foundUser={foundUser}
                    foundUserPosts={foundUserPosts}
                    selectedUserId={selectedUserId}
                    user={user}
                    posts={userPosts}
                    deleteFromPosts={deleteFromPosts}
                    />
                </div>
            </div>
        }
        </>
    :    
    null  
    }
    </>
    )
}

export default UserProfile;