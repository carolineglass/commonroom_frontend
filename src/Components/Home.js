import React from 'react'
// import CountrySearch from './CountrySearch'
import { useHistory } from "react-router-dom";
import Auto from "./Auto";

const Home = ({countries}) => {

    let history = useHistory()

    // let countryArray = countries.map((country) => {return country.name})

    return (
        <div className="home">
          <div className="welcome-and-search-container">
            <h1>CommonRoom</h1>
            {/* <CountrySearch /> */}

            <Auto
              countries={countries}
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
