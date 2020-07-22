import React, {useState} from 'react'
import CountryUser from './CountryUser'
import CountryPost from './CountryPost'
import AddPostForm from './AddPostForm'
import CategoryFilter from './CategoryFilter'

const CountryPage = ({country, user}) => {

    let [countryPosts, setCountryPosts] = useState(country.posts)
    let [filterSearchTerm, setFilterSearchTerm] = useState("All")

    let addNewPost = (newPost) => {
        setCountryPosts((prevCountryPosts) => {return [newPost, ...prevCountryPosts]})
    }

    let deleteFromPosts = (deletedPost) => {
        let updatedPosts = countryPosts.filter((post) => {
            return post.id !== deletedPost.id})
        setCountryPosts(updatedPosts)
    }

    let changeFilterSearchTerm = (termFromFilter) => {
        setFilterSearchTerm(termFromFilter)
        filterByCategory()
    }

    let filterByCategory = () => {
        let filteredPosts = countryPosts
            if (filterSearchTerm !== 'All') {
                filteredPosts = countryPosts.filter((post) => {
                    return post.category === filterSearchTerm
                })
            }
        // setCountryPosts(filteredPosts)
        return filteredPosts
    }

    return (
        <div className="country-page-container">
                <div className="country-title">
                    <h1>{country.name}</h1>
                </div>
            <div className="country-users-posts-container"> 

                <div className="country-users-container">
                    <h3>currently in {country.name}</h3>
                        {country.current_users.map(user => {
                        return <CountryUser 
                            key={user.id} 
                            user={user}/>
                        })}
                </div>

                <div className="country-posts-container">
                    <CategoryFilter 
                        filterSearchTerm={filterSearchTerm}
                        changeFilterSearchTerm={changeFilterSearchTerm}
                        />

                    <AddPostForm 
                        user={user} 
                        country={country} 
                        addNewPost={addNewPost}
                        />

                    {filterByCategory().map(post => {
                    return <CountryPost 
                                key={post.id} 
                                post={post} 
                                deleteFromPosts={deleteFromPosts}
                            />
                    })}
                </div>
            </div> 
        </div>
    )
}

export default CountryPage;