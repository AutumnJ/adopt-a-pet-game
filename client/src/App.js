import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import CatsPage from "./containers/CatsPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <header className="App-header">
                    <h1 className="App-title">Welcome to Adopt A Pet</h1>
                  </header>
                    <Route path='/cats' component={CatsPage} />
                </div>
              )}
            />
            <Route path='/cats' component={CatsPage} />
          </div>
      </Router>
    );
  }
}

export default App;


//MOVE INTO CONTAINERS or COMPONENTS?
//REMOVE link to?
//Fix weird link nesting