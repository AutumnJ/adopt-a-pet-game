import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import CatsPage from "./containers/CatsPage";
import QuestionPage from "./containers/QuestionPage";

//Get rid of NavBar?
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={QuestionPage} />
          <Route exact path='/cats' component={CatsPage} />
        </div>
      </Router>
    );
  }
}

export default App;


//MOVE INTO CONTAINERS or COMPONENTS?
//REMOVE link to?
//Fix weird link nesting