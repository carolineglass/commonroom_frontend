import React, {useState, useEffect} from 'react';
//useEffect allows us to use lifecycle methods within our components

import './App.css';

import Navigation from './Components/Navigation'

import UserProfile from './Components/UserProfile'
import Login from './Components/Login'
import Home from './Components/Home'
import CountryPage from './Components/CountryPage'

import {Switch, Route, useParams} from 'react-router-dom'

const App = () => {
  //return value of useState is going to be an array of 2 
  //(1st is the initial state, 2nd is a function definition)

  let [user, setUser] = useState([])
  let [countries, setCountries] = useState([])
  let [selectedUser, setSelectedUser] = useState({})
  // countries is an array of ALL countries that goes to the home page (search)

  // let [userPosts, setUserPosts] = useState([])

  console.log("USER", user)
  console.log("COUNTRIES", countries)

  // useEffect(() => {
  //   fetch("http://localhost:3000/users/9")
  //     .then(resp => resp.json())
  //     .then((LoggedInUser) => {
  //       setUser(LoggedInUser)
  //     })
  // }, [])

  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then(resp => resp.json())
      .then((countriesArray) => {
        setCountries(countriesArray)
      })
  }, [])

    //useEffect takes in 2 arguments 
    //1. a callback (annonymous arrow function ()=>{})
    //2. an array of dependencies (everytime something within this changes
        // the callback gets ran)


    let renderCountry = (routerProps) => {
      let countryId = parseInt(routerProps.match.params.id)
      let foundCountry = 
        countries.find(countryObj => countryObj.id === countryId)
    
      return (foundCountry ? 
        <CountryPage 
          foundCountry={foundCountry}
          user={user}
        />
        : null) 
      }

    let renderProfile = (routerProps) => {
        
        let userId = parseInt(routerProps.match.params.id)
        // let foundUser = {}
        // fetch(`http://localhost:3000/users/${userId}`)
        //   .then(resp => resp.json())
        //   .then((fetchedUser) => {
        //       foundUser = fetchedUser
        //       // setSelectedUser(user)
              
        //   })
        return <UserProfile 
            selectedUserId={userId} 
            user={user} 
            countries={countries} 
            setUser={setUser}/>
       
      }

      let handleLogin = (username) => {
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
              "content-type": "application/json",
              "accept": "application/json"
          },
          body: JSON.stringify({
              username
              })
          })
              .then(r => r.json())
              .then((resp) => {setUser(resp)})
      }

      let handleLogOut = () => {
        setUser({})
      }

  return (
    <>
      <Navigation 
          user={user}
          handleLogOut={handleLogOut}/>

      <Switch>
        <Route path="/profile/:id" 
          render= {routerProps => renderProfile(routerProps)} 
        />

        <Route path="/country/:id" 
          render = {routerProps => renderCountry(routerProps)}
        />

        <Route exact path="/login">
          <Login handleLogin={handleLogin}/>
        </Route>

        <Route exact path="/">
          <Home 
            countries={countries}
            user={user}/>
        </Route>

      </Switch>
      </>
  );
}

export default App;
