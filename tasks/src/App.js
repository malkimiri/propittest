import React from 'react';
import {BroutherRouter as Router, Route} from 'react-router-dom'

import Login from './components/Login'
import Landing from './components/Landing'
import proFaile from './components/proFaile'
import Register from './components/Register'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
    <div className="App">
      <navbar/>
      <Rout exact path="/" component={Landing}/>
      <div className="container">
      <Rout exact path="/login" component={Login}/>
      <Rout exact path="/register" component={Register}/>
      <Rout exact path="/profaile" component={Profaile}/>
      </div>
    </div>
  </Router>
  );
}

export default App;
