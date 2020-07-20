import React, {useState} from 'react'

const CountrySearch = (props) => {

    let [searchTerm, setSearchTerm] = useState("")

    let handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
        //setting the searchTerm to what is typed in the search
    }

    // send searched word up to app --> in app fine the country SEARCHTERM
    //in the array of FETCHED COUNTRIES and render that countries COUNTRYPAGE

    return (
        <div className="country-search-container">
            
            <div className="country-search-bar">

                <input 
                placeholder="Where you at?"
                type="text"
                value={searchTerm}
                onChange={handleSearchTerm}
                />

            </div>

        </div>
    )
}

export default CountrySearch;