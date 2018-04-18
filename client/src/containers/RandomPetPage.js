import React, { Component } from "react";
// import uuid from 'uuid';
import { connect } from "react-redux";
// import { Route, Switch, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/catActions";

class RandomPetPage extends Component {

    constructor() {
      super();

      this.state = {
        randomPet: [],
      }
    }

  render(){
    return (
      <div>
        Add two buttons -> get dog and get cat 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // cats: state.cats
    //maybe create a new reducer that is just random pet? And clears redux state each time the button is hit before filling it again.
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomPetPage);