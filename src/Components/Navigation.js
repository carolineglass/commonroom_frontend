import React from 'react'
import { NavLink } from "react-router-dom"; 
// import { Navbar, Nav } from 'react-bootstrap/';
import commonRoom from '../images/commonRoom.png'

const Navigation = ({user, handleLogOut}) => {
    
    return (
        <div className="nav-div">
            <img className="nav-logo" src={commonRoom}/>
            {user.full_name 
            ?
            <>
                <NavLink to="/login" 
                    onClick={() => handleLogOut()} 
                    activeClassName="nav-active" 
                    >Logout</NavLink>

                    <NavLink to={`/profile/${user.id}`}
                    activeClassName="nav-active"
                    className="nav-img">
                    <img className="nav-profile-img" src={user.img} alt={user.full_name} />
                    </NavLink>

                <NavLink to="/" 
                    activeClassName="nav-active"
                    className="nav-link">Search</NavLink>
            
                
                </>
            :
            <>
                <NavLink to="/login" 
                    activeClassName="nav-active"
                    >Login/Signup</NavLink>

                <NavLink to="/" 
                    activeClassName="nav-active"
                    >Search</NavLink>
                </>
            }
        </div>
    )
}

export default Navigation;

