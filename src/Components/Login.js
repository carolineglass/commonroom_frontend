import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

const Login = ({handleLogin}) => {

    let history = useHistory()

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [toggle, setToggle] = useState(false)

    let handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(username)
        history.push(`/`)
        setUsername("")
        setPassword("")
    }

    let handleToggle = () => {
        setToggle((prevToggle) => {return !prevToggle})
    }

    return (
        <div className="login-container">
            <h1 className="welcome-message">Welcome to CommonRoom!</h1><br></br>

        {toggle ?

        <div className="login-form-container">
            <h1>Login</h1>
            <form className="welcome-form" onSubmit={handleSubmit}>
                <input
                    className="" 
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                    />

                <br></br>

                <input
                    className=""  
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    />
                <br></br>
                <input 
                    className="w3-btn w3-blue-grey"
                    type="submit"
                    value="Login"
                    />
            </form>
            {toggle ?
                <p className="welcome-button" onClick={handleToggle}>Click to Sign-up</p>
            :
                <p className="welcome-button" onClick={handleToggle}>Click to Login</p>
            }
        </div>
        :
        <div className="login-form-container">
            <h1>Sign-up</h1>
            <form className="welcome-form">
                <input
                    className="" 
                    type="text"
                    placeholder="username"
                    />

                <br></br>
                <input
                    className="" 
                    type="text"
                    placeholder="first name"
                    />

                <br></br>
                <input
                    className="" 
                    type="text"
                    placeholder="last name"
                    />

                <br></br>

                <input
                    className=""  
                    type="password"
                    placeholder="password"
                    />
                <br></br>

                <input 
                    className="w3-btn w3-blue-grey"
                    type="submit"
                    value="Sign-up"
                    />
            </form>
            {toggle ?
                <p className="welcome-button" onClick={handleToggle}>Click to Sign-up</p>
            :
                <p className="welcome-button" onClick={handleToggle}>Click to Login</p>
            }
        </div>
        }
        
            
        
        </div>
    )
}

export default Login;

