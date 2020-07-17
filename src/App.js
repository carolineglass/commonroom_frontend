import React from 'react';
import './App.css';

import Nav from './Components/Nav'
import CountrySearch from './Components/CountrySearch'
import UserProfile from './Components/UserProfile'
import Login from './Components/Login'
import Home from './Components/Home'

import {Switch, Route} from 'react-router-dom'

const App = () => {

  return (
    <div className="app">
        <Nav />
      <div>
    <Switch>

      {/* do the route this way if you have no props to send down */}
      <Route exact path="/profile" component={UserProfile}/>

      {/* do the route this way to include props in the component */}
      <Route path="/login">
        <Login />
      </Route>

      <Route exact path="/search" component={CountrySearch} />

      <Route exact path="/" component={Home} />

    </Switch>
      </div>
    </div>
  );
}

export default App;
