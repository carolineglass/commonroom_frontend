import React from 'react'
import CountrySearch from './CountrySearch'
import { useHistory } from "react-router-dom";
import Autocomplete from "./Autocomplete";

const Home = (props) => {

    let history = useHistory()

    return (
        <div className="home">
          <div className="welcome-and-search-container">
            <h1>Welcome to CommonRoom</h1>
            <CountrySearch />
            <Autocomplete
              suggestions={["White", "Black", "Green", "Blue", "Yellow", "Red"]}
            />
            {props.countries.map((country) => {
              return <div onClick={() => {history.push(`/country/${country.id}`)}}>
                {country.name}
              </div>
            })}
          </div>
        </div>
    )
}

export default Home;