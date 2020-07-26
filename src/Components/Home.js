import React from 'react'
// import CountrySearch from './CountrySearch'
import { useHistory } from "react-router-dom";
import Auto from "./Auto";

const Home = ({countries, user}) => {

    let history = useHistory()

    let renderCountryName = (state, val) => {
      return (state.name.toLowerCase().indexOf(val.toLowerCase()) !== -1)
    }

    // let countryArray = countries.map((country) => {return country.name})

    return (
        <div className="home">
          <div className="welcome-and-search-container">

            {user.username ? 
            <>
            <h1>Welcome, {user.username}</h1> <br></br> <h2>Let's Explore!</h2>
            </>
              :
            <h1>Explore</h1>
            }

            <Auto
              countries={countries}
              renderCountryName={renderCountryName}
              history={history}
            />
            {/* {countries.map((country) => {
              return <div onClick={() => {history.push(`/country/${country.id}`)}}>
                {country.name}
              </div>
            })} */}
          </div>
        </div>
    )
}

export default Home;
