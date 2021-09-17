import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Router/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
