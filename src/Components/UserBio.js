import React, {useState} from 'react'

const UserBio = ({user, countries, setUser, foundUser, selectedUserId, foundUserCountry}) => {

    let [toggle, setToggle] = useState(false)
    let [currently, setCurrently] = useState(user.country.id)
    // this will need to be countryId to send back to the PATCH

    let [bio, setBio] = useState(user.bio)
    let [answer, setAnswer] = useState(user.answer)
    let [age, setAge] = useState(user.age)
    let [from, setFrom] = useState(user.from)

    let handleToggle = (e) => {
        setToggle((prevToggle) => {return !prevToggle})
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        setToggle((prevToggle) => {return !prevToggle})
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                country_id: currently,
                age,
                from,
                bio,
                answer
                })
            })
                .then(r => r.json())
                .then((updatedUser) => {
                    setUser(updatedUser)
                })
    }

    console.log("FOUNDUSERCOUNTRY", foundUser)

    return (
    <div className="user-bio">
    
    {selectedUserId === user.id
    ?
        <>
        {toggle
            ?
                <>
                <img className="user-img" src={user.img} alt={user.full_name}/> 
                <br/>
                <h1>{user.full_name}</h1>
                <h3 className="username">{user.username}</h3>

                <form className="edit-bio-form" onSubmit={handleSubmit}>
                    <label>Age:</label> {" "}
                    <input type="number" 
                        value={age}
                        onChange={(e) => setAge(e.target.value)}/>
                    <br/>
                    <label>Currently in</label> {" "}
                    <select value={currently} onChange={(e) => {setCurrently(e.target.value)}}>
                        {countries.map((country) => {
                            return <option value={country.id}>{country.name}</option>
                        })}
                    </select>
                    <br/>
                    <label>From</label> {" "}
                    <input type="text"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}/>
                    <br/>
                    <label>Bio:</label> {" "}
                    <input type="text"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}/>
                    <br/>
                    <label>Favorite Food:</label> {" "}
                    <input type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}/>
                    <br/>
                    <input type="submit" value="update profile" />
                </form>
                </>
            :
                <>
                <img className="user-img" src={user.img} alt={user.full_name} />

                <h1>{user.full_name}</h1>

                <h3 className="username">{user.username}</h3>

                <p>{user.age}</p>

                <p>Currently in <strong>{user.country.name}</strong></p>
                
                <p>From <strong>{user.from}</strong></p>
                
                <p>Bio: <strong>{user.bio}</strong></p>

                <p>Favorite Food:<strong>{user.answer}</strong></p>

                {/* ternary for the edit button to only show up if the selected user === logged in */}
                
                {/* {selectedUserId === user.id
                ? */}
                <button onClick={handleToggle}>Edit Profile</button>
                {/* // :
                // null
                // } */}
                
                </>
            }
            </>
        :
        <>
        <img className="user-img" src={foundUser.img} alt={foundUser.full_name} />

        <h1>{foundUser.full_name}</h1>

        <h3 className="username">{foundUser.username}</h3>

        <p>{foundUser.age}</p>

        <p>Currently in <strong>{foundUserCountry}</strong></p>
        
        <p>From <strong>{foundUser.from}</strong></p>
        
        <p>Bio: <strong>{foundUser.bio}</strong></p>

        <p>Favorite Food:<strong>{foundUser.answer}</strong></p>
        </>
        
        }
            
        </div> 
    )
}

export default UserBio
