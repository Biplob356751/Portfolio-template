import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Pricing from './Components/Pricing/Pricing';
import Contact from './Components/Contact/Contact';
import Service from './Components/Service/Service';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
            <Service></Service>
          </Route>
          <Route path="/project">
            <Project></Project>
          </Route>
          <Route path="/pricing">
            <Pricing></Pricing>
            <Service></Service>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;