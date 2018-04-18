import React, { Component } from "react";
// import uuid from 'uuid';
import { connect } from "react-redux";
// import { Route, Switch, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/catActions";
// import CatsPage from "./CatsPage";
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { FormErrors } from "../components/FormErrors"

class QuestionPage extends Component {

  constructor() {
    super();

    this.state = {
      animal: '',
      zip: '',
      formErrors: {zip: '', animal: ''},
      zipValid: false,
      animalValid: true,
      formValid: false,
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => { this.validateField(name, value) });
  };

  validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let zipValid = this.state.zipValid;
  let animalValid = this.state.animalValid;

  switch(fieldName) {
    case 'zip':
      zipValid = value.match(/^\d{5}(?:[-\s]\d{4})?$/i);
      fieldValidationErrors.zip = zipValid ? '' : 'Zip code is invalid';
      break;
    case 'animal':
      animalValid = (value === "dog" || value === "cat")
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  zipValid: zipValid,
                  animalValid: animalValid
                }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.zipValid && this.state.animalValid});
  }

  handleOnSubmit = event => {
    event.preventDefault();

    //NEED TO CALL DIFFERENT ACTION BASED ON WHICH BOX IS CHECKED.
    const { cats, actions } = this.props;
    const { animal, zip } = this.state;

    //check if cats has values already -> if so, dispatch action to erase those from db

    if (animal === 'dog') {
      console.log("ADD IN DOG FETCH ACTION")
    } else {

    actions.fetchCats();

    this.props.history.push('/cats');
  }
    //update state 

    //add cats to DB
    // actions.addCats(this.state);

    //Add in dog route redirect

    //is reset of state required?
    // this.props.history.push('/cats')
    this.setState({
      animal: '',
      zip: '',
      formErrors: {zip: '', animal: ''},
      zipValid: false,
      animalValid: true,
      formValid: false,
    });
  }

  //prevent submit unless valid zip?
  render(){
    const { zip, animal } = this.state;

    return (
      <div>
        <header className="App-header">
            <h1 className="App-title">Welcome to Adopt A Pet</h1>
        </header>
        <Form inline style={{ paddingTop : "2cm", paddingBottom : "2cm"}} onSubmit={this.handleOnSubmit}>

          <FormGroup controlId="formInlineName">
            <ControlLabel>Zip:</ControlLabel>{' '}
            <FormControl type="text" placeholder="Zip Code" onChange={this.handleOnChange} name="zip" value={zip} required="true"/>
          </FormGroup>{' '}

          <FormGroup controlId="formControlsSelect" style={{paddingRight : "1em"}}>
            <ControlLabel style={{ paddingRight : "0.25em"}}>Select:</ControlLabel>
              <FormControl componentClass="select" placeholder="select" onChange={this.handleOnChange} name="animal" value={animal} required="true">
                <option name="animal" value="cat">Cat</option>
                <option name="animal" value="dog">Dog</option>
              </FormControl>
            </FormGroup>{' '}

          <Button type="submit" style={{'backgroundColor' : '#405681', color : 'white'}} bsSize="large" disabled={!this.state.formValid}>Get Pets!</Button>
        </Form>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);