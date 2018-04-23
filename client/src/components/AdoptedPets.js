import React, { Component } from "react";

import AdoptedPetGridItems from './AdoptedPetGridItems'

class AdoptedPets extends Component {

  render(){

    if (this.props.adopted[0]) {
      return (
        <div>
          <div className="cats-header">
            <h1>"You got me!"</h1>
            <h2><small className="text-muted">"Now take me home!"</small></h2>
          </div>
          <div style={{"paddingTop" : "15px"}}>
            <AdoptedPetGridItems pets={this.props.adopted} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="cats-header">
          <h1>"You got me!"</h1>
          <h2><small className="text-muted">"Now take me home!"</small></h2>
        </div>
      )
    }
  }
}

export default AdoptedPets