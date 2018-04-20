import React, { Component } from "react";
import { connect } from "react-redux";

import DogsGrid from './DogsGrid'
import { PetErrorPage } from '../components/PetErrorPage'


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
          <DogsGrid dogs={this.props.dogs} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs.dogs
  };
};

export default connect(mapStateToProps, null)(DogsPage);

