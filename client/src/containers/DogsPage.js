import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/dogActions";
import DogsGrid from './DogsGrid'
import { PetErrorPage } from '../components/PetErrorPage'
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

class DogsPage extends Component {

  constructor() {
    super();

    this.state = {
      dogs: [],
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
    // console.log(this.state)
    console.log("this.props.dogs")
    console.log(this.props.dogs)
    if (!this.props.dogs[0]) {
      return (
        <PetErrorPage pet={"dog"}/>
      )
    } else {
    // console.log(this.props.cats.cats.length)
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

// const mapDispatchToProps = dispatch => {
//   return { actions: bindActionCreators(actions, dispatch) };
// };

export default connect(mapStateToProps)(DogsPage);
// export default CatsPage;

