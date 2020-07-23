import React, {useState} from 'react'

const Login = ({handleLogin}) => {

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    let handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(username)
        setUsername("")
        setPassword("")
    }

    return (
        <div className="login-container">
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                    />

                <br></br>

                <input 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    />

                <input 
                    type="submit"
                    value="Login"
                    />
            </form>
        </div>
    )
}

export default Login;