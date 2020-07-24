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

    console.log("USERPOSTS",userPosts)

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
                <button className="toggle-button" onClick={handleClick}>
                    {toggle ? "Posts" : "Map"}
                </button>
                    {toggle ? 
                    <h1>MAP COMPONENT GOES HERE</h1>
                    :
                    <UserPosts
                        user={user}
                        posts={userPosts}
                        deleteFromPosts={deleteFromPosts}
                        foundUser={foundUser}
                        foundUserPosts={foundUserPosts}
                        selectedUserId={selectedUserId}
                        />
                    }
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
                <button className="toggle-button" onClick={handleClick}>
                    {toggle ? "Posts" : "Map"}
                </button>

                {toggle ? 
                <h1>MAP COMPONENT GOES HERE</h1>
                :
                <UserPosts
                    foundUser={foundUser}
                    foundUserPosts={foundUserPosts}
                    selectedUserId={selectedUserId}
                    user={user}
                    posts={userPosts}
                    deleteFromPosts={deleteFromPosts}
                    />
                }
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