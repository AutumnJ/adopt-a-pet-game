import React, { Component } from "react";
// import uuid from 'uuid';
import { connect } from "react-redux";
// import { Route, Switch, Link } from "react-router-dom";
import AdoptedCatsGridItems from '../components/AdoptedCatsGridItems'

class AdoptedCats extends Component {

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
            <h2><small className="text-muted">Now take me home!"</small></h2>
          </div>
          <div style={{"paddingTop" : "10px"}}>
            <AdoptedCatsGridItems cats={this.state.adopted} />
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


//NOT SURE ANY OF THIS IS NEEDED -> CAN THIS JUST BE A COMPONENT? 
// const mapStateToProps = state => {
//   return {
//     cats: state.cats
//   };
// };

// // const mapDispatchToProps = dispatch => {
// //   return { actions: bindActionCreators(actions, dispatch) };
// // };

// export default connect(mapStateToProps)(AdoptedCats);

export default AdoptedCats