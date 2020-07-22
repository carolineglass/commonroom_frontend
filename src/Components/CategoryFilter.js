import React, {useState} from 'react'

const CategoryFilter = ({changeFilterSearchTerm, filterSearchTerm}) => {

    let handleFilter = (e) => {
        changeFilterSearchTerm(e.target.value)
    }

    return (
        <div>
            <h3>Choose a Category!</h3>
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
        </div>
    )
}

export default CategoryFilter;