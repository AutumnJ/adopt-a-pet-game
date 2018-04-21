import React, { Component } from "react";

import AdoptedPetsGridItems from './AdoptedPetsGridItems'

class AdoptedDogs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adopted: this.props.adopted
    }
  }

  render(){

    if (this.state.adopted[0]) {
      return (
        <div>
          <div className="cats-header">
            <h1>"You got me!"</h1>
            <h2><small className="text-muted">"Now take me home!"</small></h2>
          </div>
          <div style={{"paddingTop" : "15px"}}>
            <AdoptedPetsGridItems pets={this.state.adopted} />
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

export default AdoptedDogs