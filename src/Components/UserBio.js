import React, {useState} from 'react'

const UserBio = ({user}) => {

    let [toggle, setToggle] = useState(false)

    let handleToggle = (e) => {
        setToggle((prevToggle) => {return !prevToggle})
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        setToggle((prevToggle) => {return !prevToggle})
    }

    console.log(toggle)

    return (

        <div className="user-bio">
            {toggle
                ?
                <>
                <img className="user-img" 
                    src={user.img}
                    alt={user.full_name} 
                    /> 
                <br/>
                <button>change profile picture</button>
                <h1>{user.full_name}</h1>
                <h3 className="username">{user.username}</h3>
                <form onSubmit={handleSubmit}>
                    <label>Currently in</label> {" "}
                    <input type="text" placeholder={user.country.name}/>
                    <br/>
                    <label>From</label> {" "}
                    <input type="text" placeholder={user.from}/>
                    <br/>
                    <label>Bio:</label> {" "}
                    <input type="text" placeholder={user.bio}/>
                    <br/>
                    <label>Favorite Food:</label> {" "}
                    <input type="text" placeholder={user.answer}/>
                    <br/>
                    <input type="submit" value="update profile" />
                </form>
                </>
                :
                <>
                <img className="user-img" 
                    src={user.img}
                    alt={user.full_name} 
                    />

                <h1>{user.full_name}</h1>
                <h3 className="username">{user.username}</h3>

                <p>Currently in <strong>{user.country.name}</strong></p>
                
                <p>From <strong>{user.from}</strong></p>
                <p>{user.age}</p>
                <p>Bio: <strong>{user.bio}</strong></p>
                <p>Favorite Food:<strong>{user.answer}</strong></p>
                <button onClick={handleToggle}>Edit</button>
                </>
            }
                

                
            </div> 
    )
}

export default UserBio
