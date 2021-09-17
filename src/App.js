import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';



const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
        </Switch>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
