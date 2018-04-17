import React, { Component } from "react";
// import uuid from 'uuid';
import { connect } from "react-redux";
// import { Route, Switch, Link } from "react-router-dom";

class AdoptedCats extends Component {

  constructor() {
    super();

    this.state = {
      cats: [],
    }
  }

  render(){
    let { cats, actions } = this.props;

    // console.log(this.props.cats.cats.length)
    return (
      <div>
        <h1 className="cats-header">"You got me!<small className="text-muted">Now take me home!</small>"</h1>

        <p>Add cats to adopted section</p>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    cats: state.cats
  };
};

// const mapDispatchToProps = dispatch => {
//   return { actions: bindActionCreators(actions, dispatch) };
// };

export default connect(mapStateToProps)(AdoptedCats);
