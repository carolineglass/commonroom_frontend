import React from 'react'

const Login = (props) => {
    return (
        <div className="login-container">
            <h1>Login page</h1>
            <form>
                <input 
                    type="text"
                    placeholder="username"
                    />

                <br></br>

                <input 
                    type="text"
                    placeholder="password"
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