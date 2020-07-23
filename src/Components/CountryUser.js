import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

const CountryUser = ({user}) => {

    let history = useHistory()
 
    return (
        <div onClick={() => {history.push(`/profile/${user.id}`)}} className="country-user-card">
            <h3>
                <img src={user.img} alt={user.full_name}/>
                {user.username}
            </h3>
        </div>
            
    )
}

export default CountryUser;