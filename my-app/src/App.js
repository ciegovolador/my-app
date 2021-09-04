import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import About from './components/about/about.jsx'
import Home from './components/home/home.jsx';
import './App.css';

function App() {
  return (<div>
    <nav>
      <ul id="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
