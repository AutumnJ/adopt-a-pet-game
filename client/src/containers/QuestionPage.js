import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import { fetchCats } from "../actions/catActions";
import { fetchDogs } from "../actions/dogActions";
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
      redirect: '',
    }
  }

  // componentWillMount() {
  //   this.setState = {
  //     animal: '',
  //     zip: '',
  //     formErrors: {zip: '', animal: ''},
  //     zipValid: false,
  //     animalValid: true,
  //     formValid: false,
  //     redirect: '',
  //   }
  // }

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

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (this.props !== nextProps || this.state !== nextState);
  // }

  handleOnSubmit = event => {
    event.preventDefault();

    const { animal, zip } = this.state;

    const oldDoggies = this.props.dogs[0] ? JSON.stringify(this.props.dogs[0]) : "none"
    const oldKitties = this.props.cats[0] ? JSON.stringify(this.props.cats[0]) : "none"

    if (animal === 'dog') {

      this.props.fetchDogs(zip)

      // setState to trigger redirect once Redux state has updated 
      let interval = setInterval((function(self, oldDoggies){
        return function(){
          if (oldDoggies !== JSON.stringify(self.props.dogs[0]) && self.props.dogs[0]) {

            clearInterval(interval);
            self.setState({redirect: 'dog'});
          }
        }
      })(this, oldDoggies), 500);

    } else {
      this.props.fetchCats(zip);

       // setState to trigger redirect once Redux state has updated 
      let interval = setInterval((function(self, oldKitties){
        return function(){
          if (oldKitties !== JSON.stringify(self.props.cats[0]) && self.props.cats[0]) {
            clearInterval(interval);
            self.setState({redirect: 'cat'});
          }
        }
      })(this, oldKitties), 500);
    }
  }

  // componentWillUnmount() {
  //   this.setState = {
  //     animal: '',
  //     zip: '',
  //     formErrors: {zip: '', animal: ''},
  //     zipValid: false,
  //     animalValid: true,
  //     formValid: false,
  //     redirect: '',
  //   }
  // }

  render(){
    const { zip, animal, redirect } = this.state;

    if (redirect === 'dog' || redirect === 'cat') {
      return (
        <div>
          {redirect === 'cat' ? <Redirect to={`/cats`}/> : <Redirect to={`/dogs`} />}
        </div>
      );
    }

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
    cats: state.cats.cats,
    dogs: state.dogs.dogs
  };
};

export default connect(mapStateToProps, {fetchCats, fetchDogs})(QuestionPage);