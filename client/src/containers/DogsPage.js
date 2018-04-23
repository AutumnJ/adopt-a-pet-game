import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DogsGrid from './DogsGrid'
import { PetErrorPage } from '../components/PetErrorPage'
import { adoptDog, clearGame, playGame, updatePhoto } from '../actions/dogActions'

class DogsPage extends Component {

  render(){

    if (!this.props.dogs[0]) {
      return (
        <PetErrorPage pet={"dog"}/>
      )
    } else {

      return (
        <div>
          <div className="cats-header">
            <h1> DOGGIES! </h1>
            <h2><small className="text-muted">Grab them before they disappear!</small></h2>
          </div>
          <DogsGrid adoptedDogs={this.props.adoptedDogs} dogGame={this.props.dogGame} actions={this.props.actions} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs.dogs,
    adoptedDogs: state.dogs.adoptedDogs,
    dogGame: state.dogs.dogGame
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators( { adoptDog, clearGame, playGame, updatePhoto }, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogsPage);

