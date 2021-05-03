import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
