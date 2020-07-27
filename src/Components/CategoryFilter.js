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
            <img className="filter-img" onClick={handleToggle} src={filterImg} />
            {toggle ?
            <select value={filterSearchTerm} onChange={handleFilter}>
                <option value="All">All</option>
                <option value="General">General</option>
                <option value="Recommendation">Recommendations</option>
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