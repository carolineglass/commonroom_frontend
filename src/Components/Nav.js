import React from 'react'
import { NavLink } from "react-router-dom"; 

const Nav = (props) => {
    
    return (
        <div className="nav-container">
            <ul className="nav-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/country">Country Page</NavLink></li>
                    {/* <li><NavLink to="/search">Search</NavLink></li> */}
                    <li><NavLink to="/login">Login</NavLink></li> 
                    {/* <li><NavLink to="/signup">Signup</NavLink></li>  */}
            </ul>
        </div>
    )
}

export default Nav;