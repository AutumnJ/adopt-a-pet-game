import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { PetErrorPage } from '../components/PetErrorPage'
import PetsGrid from '../components/PetsGrid'
import { adoptCat, clearGame, playGame, updatePhoto } from '../actions/catActions'
import IMG_5695 from '../lib/IMG_5695.jpg'
import Adopted from '../lib/Adopted.png'
import AdoptedPets from '../components/AdoptedPets'

class CatsPage extends Component {

  render(){

    if (!this.props.cats[0]) {
      return (
        <PetErrorPage pet={"cat"}/>
      )
    } else {

      return (
        <div>
          <div className="cats-header">
            <h1> /\___/\  KITTIES!  /\___/\</h1>
            <h2><small className="text-muted">Grab them before they disappear!</small></h2>
          </div>
          <PetsGrid 
            gamePets={this.props.catGame} 
            adopt={this.props.actions.adoptCat} 
            updatePhoto={this.props.actions.updatePhoto}
            clearGame={this.props.actions.clearGame}
            playGame={this.props.actions.playGame}
            adoptedImg={Adopted} 
            adoptedImgStatic={"/static/media/Adopted.e366e9ec.png"} 
            takenImg={IMG_5695} 
            takenImgStatic={"/static/media/IMG_5695.7d23606d.jpg"} 
            />
          <AdoptedPets adopted={this.props.adoptedCats}/>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    adoptedCats: state.cats.adoptedCats,
    cats: state.cats.cats,
    catGame: state.cats.catGame
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators( { adoptCat, clearGame, playGame, updatePhoto }, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatsPage);

