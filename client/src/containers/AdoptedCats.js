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
          <h1 className="cats-header">"You got me!<small className="text-muted">Now take me home!</small>"</h1>
          <AdoptedCatsGridItems cats={this.state.adopted} />
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="cats-header">"You got me!<small className="text-muted">Now take me home!</small>"</h1>
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