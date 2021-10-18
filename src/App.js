import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;