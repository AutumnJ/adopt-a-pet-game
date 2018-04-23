import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { PetErrorPage } from '../components/PetErrorPage'
import PetsGrid from '../components/PetsGrid'
import { adoptDog, clearGame, playGame, updatePhoto } from '../actions/dogActions'
import LittlePup from '../lib/LittlePup.jpg'
import Adopted from '../lib/Adopted.png'
import AdoptedPets from '../components/AdoptedPets'

class DogsPage extends Component {

  render(){

    if (!this.props.dogs[0]) {
      return (
        <PetErrorPage pet={"dog"}/>
      )
    } else {

      return (
        <div>
          <div className="dogs-header">
            <h1> DOGGIES! </h1>
            <h2><small className="text-muted">Grab them before they disappear!</small></h2>
          </div>
          <PetsGrid 
            gamePets={this.props.dogGame} 
            adopt={this.props.actions.adoptDog} 
            updatePhoto={this.props.actions.updatePhoto}
            clearGame={this.props.actions.clearGame}
            playGame={this.props.actions.playGame}
            adoptedImg={Adopted} 
            adoptedImgStatic={"/static/media/Adopted.e366e9ec.png"} 
            takenImg={LittlePup} 
            takenImgStatic={"/static/media/LittlePup.df8ef6dd.jpg"} 
            />
          <AdoptedPets adopted={this.props.adoptedDogs}/>
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

