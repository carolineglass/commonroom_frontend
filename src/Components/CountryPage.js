import React, {useState, useEffect} from 'react'
import CountryUser from './CountryUser'
import CountryPost from './CountryPost'
import AddPostForm from './AddPostForm'
import CategoryFilter from './CategoryFilter'

const CountryPage = ({foundCountry, user}) => {

    let [country, setCountry] = useState({})
    let [countryPosts, setCountryPosts] = useState([])
    let [filterSearchTerm, setFilterSearchTerm] = useState("All")

    let addNewPost = (newPost) => {
        setCountryPosts((prevCountryPosts) => {return [newPost, ...prevCountryPosts]})
    }

    useEffect(() => {
        fetch(`http://localhost:3000/countries/${foundCountry.id}`)
          .then(resp => resp.json())
          .then((countryInfo) => {
            setCountry(countryInfo)
            setCountryPosts(countryInfo.posts)
          })
      }, [])

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
        return filteredPosts
    }

    return (
        <>
        {country.current_users 
        ?
        <div className="country-page-container">
            <div className="country-title">
                <div className="country-title-div">
                <h1>{country.name.toUpperCase()}</h1>
                </div>
            </div>
            
            <div className="users-filter-posts">
                    <div className="country-users-container">
                            <h3>{country.name}</h3>
                                {country.current_users.map(user => {
                                return <CountryUser 
                                    key={user.id} 
                                    user={user}/>
                                })}
                    </div>
                <div className="country-users-posts-container"> 
                    <div className="filter-and-add">
                        <AddPostForm 
                            user={user} 
                            country={country} 
                            addNewPost={addNewPost}
                            />
                        <CategoryFilter 
                            filterSearchTerm={filterSearchTerm}
                            changeFilterSearchTerm={changeFilterSearchTerm}
                            />
                    </div>
                        <div className="country-posts-container">
                            {countryPosts.length === 0 ? 
                                <h2>Be the first to post!</h2>
                            :
                            filterByCategory().map(post => {
                            return <CountryPost 
                                        key={post.id} 
                                        post={post} 
                                        deleteFromPosts={deleteFromPosts}
                                        user={user}
                                    />
                            })
                            }
                        </div>
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