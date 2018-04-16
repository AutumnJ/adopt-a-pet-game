import React, { Component } from "react";
import uuid from 'uuid';
import { connect } from "react-redux";
// import { Route, Switch, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/catActions";

class CatsPage extends Component {

  constructor() {
    super();

    this.state = {
      cats: [],
      zip: '',
    }
  }
//   componentDidMount() {
//     const { cats, actions } = this.props;

//     if (cats.length === 0) {
//       actions.fetchCats();
//     }
//   }
// }


  handleOnSubmit = event => {
    event.preventDefault();
    // Destructure addMovie and history from the components props
    // const cats = Object.assign({}, this.props.cats, { id: uuid() });
    
    const { cats, actions } = this.props;
    console.log("getting cats")
    actions.fetchCats();
    console.log("got cats")
    console.log(this.state)
    //update state 

    //add cats to DB
    // actions.addCats(this.state);

    //redirect to which route?
    // history.push('/movies')
  }

  // handleOnChange = event => {
  //   this.setState({
  //     title: event.target.value
  //   });
  // }

  render(){
    return (
      <div>
        <h1>GET CATS</h1>
        <button style={{ marginTop: '16px' }} onClick={this.handleOnSubmit} >GetCats</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cats: state.cats
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatsPage);