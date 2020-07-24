import React from 'react'
import { NavLink } from "react-router-dom"; 

const Nav = ({user, handleLogOut}) => {
    
    return (
        <div className="nav-container">
            <ul className="nav-list">

            {user.full_name ? 
            <>
                <li><NavLink to={`/profile/${user.id}`}>
                
                <img className="nav-profile-img" src={user.img} alt={user.full_name} />

                </NavLink></li>

                <li onClick={() => handleLogOut()}><NavLink to="/login">Logout</NavLink></li>
            </>
            :
            <>
                <li><NavLink to="/login">Login/Signup</NavLink></li>
            </>
            }
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav;