import React, {useState, useEffect} from 'react';
//useEffect allows us to use lifecycle methods within our components

import './App.css';

import Nav from './Components/Nav'

import UserProfile from './Components/UserProfile'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import CountryPage from './Components/CountryPage'

import {Switch, Route, useParams} from 'react-router-dom'

const App = () => {
  //return value of useState is going to be an array of 2 
  //(1st is the initial state, 2nd is a function definition)

  let [user, setUser] = useState([])
  let [countries, setCountries] = useState([])
  // countries is an array of ALL countries that goes to the home page (search)

  // let [userPosts, setUserPosts] = useState([])

  console.log("USER", user)
  console.log("COUNTRIES", countries)

  useEffect(() => {
    fetch("http://localhost:3000/users/9")
      .then(resp => resp.json())
      .then((LoggedInUser) => {
        setUser(LoggedInUser)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then(resp => resp.json())
      .then((countriesArray) => {
        setCountries(countriesArray)
      })
  }, [])

  // useEffect(() => {
  //   fetch("http://localhost:3000/countries")
  //     .then(resp => resp.json())
  //     .then((countriesArray) => {
  //       setCountries(countriesArray)
  //     })
  // }, [userPosts])

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
          country={foundCountry}
          user={user}
        />
        : null) 
      }

  return (
    <div className="app">
        <Nav />

      <div>

      <Switch>
        <Route exact path="/profile">
          <UserProfile 
            user={user}
            // userPosts={userPosts}
            // deleteFromPosts={deleteFromPosts}
            />
        </Route>

        <Route path="/country/:id" 
          render = {routerProps => renderCountry(routerProps)}
        />

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <Home countries={countries}/>
        </Route>

        <Route exact path="/signup" component={Signup} />
      </Switch>

      </div>

    </div>
  );
}

export default App;
