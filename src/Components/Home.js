import React from 'react'
import CountrySearch from './CountrySearch'

const Home = (props) => {
    return (
        <div className="home">
          <div className="welcome-and-search-container">
            <h1>Welcome to CommonRoom</h1>
            <CountrySearch />
          </div>
        </div>
    )
}

export default Home;