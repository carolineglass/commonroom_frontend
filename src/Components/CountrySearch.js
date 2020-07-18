import React, {useState} from 'react'

const CountrySearch = (props) => {

    let [searchTerm, setSearchTerm] = useState("")

    let handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
        //setting the searchTerm to what is typed in the search
    }

    return (
        <div className="country-search-container">
            
            <div className="country-search-bar">

                <input 
                className="country-search-input"
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