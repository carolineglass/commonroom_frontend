import React, {useState} from 'react'
import filterImg from '../images/filter-img.png'

const CategoryFilter = ({changeFilterSearchTerm, filterSearchTerm}) => {

    let [toggle, setToggle] = useState(false)

    let handleFilter = (e) => {
        changeFilterSearchTerm(e.target.value)
    }

    let handleToggle = (e) => {
        setToggle((prevToggle) => {return !prevToggle})
    }

    return (
        <div className="filter-container">
            {/* <img className="filter-img" onClick={handleToggle} src={filterImg} /> */}

            <svg className="filter-img" onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" 
            class="icon icon-tabler icon-tabler-adjustments" width="40" height="40" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="6" cy="10" r="2" />
            <line x1="6" y1="4" x2="6" y2="8" />
            <line x1="6" y1="12" x2="6" y2="20" />
            <circle cx="12" cy="16" r="2" />
            <line x1="12" y1="4" x2="12" y2="14" />
            <line x1="12" y1="18" x2="12" y2="20" />
            <circle cx="18" cy="7" r="2" />
            <line x1="18" y1="4" x2="18" y2="5" />
            <line x1="18" y1="9" x2="18" y2="20" />
            </svg>



            {toggle ?
            <select value={filterSearchTerm} onChange={handleFilter}>
                <option value="All">All</option>
                <option value="General">General</option>
                <option value="Recommendation">Recommendation</option>
                <option value="Travel Buddy">Travel Buddy</option>
                <option value="Food/Drink">Food/Drink</option>
                <option value="Rideshare">Rideshare</option>
                <option value="For Sale">For Sale</option>
                <option value="Activity">Activity</option>
            </select>
            :
            null
            }
        </div>
    )
}

export default CategoryFilter;