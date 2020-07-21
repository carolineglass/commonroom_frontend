import React, {useState} from 'react'



const CountryUser = ({user}) => {

    let handleClick = () => {

    }
 
    return (
        <div onClick={() => {console.log(user.id)}} className="country-user-card">
            <h3>
                <img src={user.img} alt={user.full_name}/>
                {user.username}
            </h3>
        </div>
            
    )
}

export default CountryUser;