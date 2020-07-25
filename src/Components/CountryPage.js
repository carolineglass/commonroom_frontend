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
        :
        null 
        }
        </>
        
    )
}

export default CountryPage;