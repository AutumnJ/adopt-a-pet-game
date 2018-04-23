import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CatsGrid from '../components/CatsGrid'
import { PetErrorPage } from '../components/PetErrorPage'
import { adoptCat, clearGame, playGame, updatePhoto } from '../actions/catActions'

class CatsPage extends Component {

  render(){

    if (!this.props.cats[0]) {
      return (
        <PetErrorPage pet={"cat"}/>
      )
    } else {
      console.log(this.props.actions)
      return (
        <div>
          <div className="cats-header">
            <h1> /\___/\  KITTIES!  /\___/\</h1>
            <h2><small className="text-muted">Grab them before they disappear!</small></h2>
          </div>
          <CatsGrid cats={this.props.cats} actions={this.props.actions}/>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    cats: state.cats.cats
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators( { adoptCat, clearGame, playGame, updatePhoto }, dispatch) };
};

export default connect(mapStateToProps, null)(CatsPage);

