import React, { Component } from "react";
import { connect } from "react-redux";

import CatsGrid from './CatsGrid'
import { PetErrorPage } from '../components/PetErrorPage'

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
          <CatsGrid cats={this.props.cats} />
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

export default connect(mapStateToProps, null)(CatsPage);

