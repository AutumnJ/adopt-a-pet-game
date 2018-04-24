import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import CatsPage from "./containers/CatsPage";
import DogsPage from "./containers/DogsPage";
import QuestionPage from "./containers/QuestionPage";
import RandomPetPage from "./containers/RandomPetPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={QuestionPage} />
          <Route path='/cats' component={CatsPage} />
          <Route path='/dogs' component={DogsPage} />
          <Route path="/randompet" component={RandomPetPage} />
        </div>
      </Router>
    );
  }
}

export default App;