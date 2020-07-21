import React, {useState} from 'react'
import CountryUser from './CountryUser'
import CountryPost from './CountryPost'
import AddPostForm from './AddPostForm'

const CountryPage = ({country, user}) => {
    //props for the country will be from App that was passed UP from Country Search
    
    // let [countryPosts, setCountryPosts] = useState([country[0].posts])

    // console.log(countryPosts)
    
    let addNewPost = () => {
        // setCountryPosts((prevCountryPosts) => {return [...prevCountryPosts, newPost]})
    }

    let deleteFromPosts = (deletedPost) => {
        // console.log(deletedPost)
        // let updatedPosts = countryPosts
        // countryPosts.filter((post) => post.id !== deletedPost.id)

        // setCountryPosts({...countryPosts, })
        //filter out from the array of posts
    }

    //ASK ABOUT GETTING COUNTRY[0].posts --> saying 
    //TypeError: Cannot read property 'posts' of undefined
    
    return (
        <>
        {country[0]
        ?
        <div className="country-page-container">
            <div className="country-title">
                <h1>{country[0].name}</h1>
            </div>
        <div className="country-users-posts-container"> 
            <div className="country-users-container">
                <h3>currently in {country[0].name}</h3>
                {country[0].current_users.map(user => {
                    return <CountryUser key={user.id} user={user}/>
                })}
            </div>
            <div className="country-posts-container">
                <h1>1. FILTERS</h1>

                <AddPostForm user={user} country={country[0]}/>

                {country[0].posts.map(post => {
                    return <CountryPost key={post.id} post={post} deleteFromPosts={deleteFromPosts}/>
                })}
            </div>
        </div> 
        </div>
        :
        null
        }
        
        </>
    )
}

export default CountryPage;