import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

const Login = ({handleLogin}) => {

    let history = useHistory()

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    let handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(username)
        history.push(`/`)
        setUsername("")
        setPassword("")
    }

//     <div class="w3-container w3-teal">
//   <h2>Input Form</h2>
// </div>

// <form class="w3-container">
//   <label class="w3-text-teal"><b>First Name</b></label>
//   <input class="w3-input w3-border w3-light-grey" type="text">

//   <label class="w3-text-teal"><b>Last Name</b></label>
//   <input class="w3-input w3-border w3-light-grey" type="text">

//   <button class="w3-btn w3-blue-grey">Register</button>
// </form>

    return (
        <div className="login-container">
            <h1 className="welcome-message">Welcome to CommonRoom!</h1><br></br>
            <div className="w3-container w3-teal">
            <h1>Login</h1>
            <form className="w3-container" onSubmit={handleSubmit}>
                <input
                    className="w3-input w3-border w3-light-grey" 
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                    />

                <br></br>

                <input
                    className="w3-input w3-border w3-light-grey"  
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    />

                <input 
                    className="w3-btn w3-blue-grey"
                    type="submit"
                    value="Login"
                    />
            </form>
            </div>
        </div>
    )
}

export default Login;