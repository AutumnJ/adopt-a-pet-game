import React, { Component } from "react";
// import uuid from 'uuid';
import { connect } from "react-redux";
// import { Route, Switch, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/catActions";
import CatsGrid from './CatsGrid'
import { CatsPageError } from '../components/CatsPageError'
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

class CatsPage extends Component {

  constructor() {
    super();

    this.state = {
      cats: [],
    }
  }

  //UPDATE THIS INTERNAL STATE WHEN CATS ARE "ADOPTED"
  //PASS THAT INTERNAL STATE TO ADOPTED CATS

  // componentDidCatch(error, info) {
  //   this.setState({ hasError: true})
  // }

  //REALLY WANT THIS TO BE ON DISAPPEAR?
  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   actions.deleteCat(id);
    //update state: remove cats that disappear

    //redirect to which route?
    // history.push('/movies')
  // }

  //ON CLICK, ADD TO THIS.STATE, WHICH IS PASSED TO CHILD COMPONENT?

  // handleOnChange = event => {
  //   this.setState({
  //     title: event.target.value
  //   });
  // }

  // componentDidMount() {
  //   this.setState({
  //     cats: this.props.cats,
  //   })
  // }

  //  componentWillUnmount() {
  //   this.setState({
  //     cats: [],
  //   })
  // }

  render(){
    console.log(this.state)
    console.log(this.props.cats)
    if (this.props.cats === []) {
      return (
        <CatsPageError />
      )
    } else {
    // console.log(this.props.cats.cats.length)
      return (

        <div>
          <h1 className="cats-header"> /\___/\  KITTIES!  /\___/\</h1>
          <h2><small className="text-muted">Grab them before they disappear!</small></h2>

          <CatsGrid cats={this.props.cats.cats}/>
        </div>
      );
    }
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

export default connect(mapStateToProps)(CatsPage);
// export default CatsPage;

