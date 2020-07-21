import React, {useState, useEffect} from 'react';
//useEffect allows us to use lifecycle methods within our components

import './App.css';

import Nav from './Components/Nav'

import UserProfile from './Components/UserProfile'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import CountryPage from './Components/CountryPage'

import {Switch, Route} from 'react-router-dom'

const App = () => {
  //return value of useState is going to be an array of 2 
  //(1st is the initial state, 2nd is a function definition)

  let [user, setUser] = useState([])
  let [countries, setCountries] = useState([])

  //useEffect takes in 2 arguments 
    //1. a callback (annonymous arrow function ()=>{})
    //2. an array of dependencies (everytime something within this changes
        // the callback gets ran)

  //similar to componentDidUpdate when there is a dependency 
  //similar to componentDidMount when there is an empty array
  
  console.log("USER", user)
  console.log("COUNTRIES", countries)

  //this fetch is hardcoded for ONE user - when implementing auth that user ID will
  //be the ID of whoever has signed in
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
      .then((countryArray) => {
        setCountries(countryArray)
      })
  }, [])

  // let handleClick = (e) => {
  
        //FAMILIAR VERSION
          // let copyOfUsers = [...users, "new user"]
          // setUsers(copyOfUsers)

        //PREFERRED VERSION  
          // ** setUsers((prevUsers) => {return [...prevUsers, "new user"]}) **

    //what is passed into setUsers OVERWRITES the original state in useState
    //so you need to do the copy of the users and add the new one
    //setUsers behaves like setState -> triggers a rerender
    //setUsers is asynchronous

  return (
    <div className="app">
        <Nav />

      <div>
      <Switch>

      {/* do the route this way if you have no props to send down */}
      <Route exact path="/profile">
        <UserProfile user={user}/>
      </Route>

      <Route exact path="/country">
        <CountryPage country={countries} user={user}/>
      </Route>

      {/* do the route this way to include props in the component */}
      <Route path="/login">
        <Login />
      </Route>

      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />

      </Switch>
      </div>

    </div>
  );
}

export default App;
