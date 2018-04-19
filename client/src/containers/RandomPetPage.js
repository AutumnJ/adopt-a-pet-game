import React, { Component } from "react";
// import uuid from 'uuid';
import { connect } from "react-redux";
// import { Route, Switch, Link } from "react-router-dom";
import { Button, ButtonToolbar } from 'react-bootstrap';
import { bindActionCreators } from "redux";
import { fetchRandomCat } from "../actions/catActions";
import { fetchRandomDog } from "../actions/dogActions";
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { RandomCat } from '../components/RandomCat'
import { RandomDog } from '../components/RandomDog'

class RandomPetPage extends Component {

  constructor() {
    super();

    this.state = {
      randomCat: [],
      randomDog: []
    }
  }

  handleOnDogClick = event => {
    event.preventDefault();
    const { actions } = this.props;

    actions.fetchRandomDog();
  }

  handleOnCatClick = event => {
    event.preventDefault(); 

    const { actions } = this.props;
    actions.fetchRandomCat();
  }


  render(){
    console.log("history")
    console.log(this.props.history)
    const dog = (this.props.randomDog[0] ? this.props.randomDog[0] : null)
    const cat = (this.props.randomCat[0] ? this.props.randomCat[0] : null)
    return (
      <div>
        <div className="random-pet-header">
            <h1>Feeling lucky?</h1>
            <h2><small className="text-muted">Click below to see a random pet!</small></h2>
          </div>
        <ButtonToolbar>
          <Button className="random-pet-btn" bsStyle="primary" bsSize="large" onClick={this.handleOnDogClick}>
            Get Dog
          </Button>
          <Button className="random-pet-btn" bsStyle="primary" bsSize="large" onClick={this.handleOnCatClick}>
            Get Cat
          </Button>
        </ButtonToolbar>
        <div className="pets">
          <Grid>
            <Row>
              <Col xs={6}>
                <RandomDog dog={dog} />
              </Col>
              <Col xs={6}>
                <RandomCat cat={cat} />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    randomCat: state.cats.randomCat,
    randomDog: state.dogs.randomDog
    //maybe create a new reducer that is just random pet? And clears redux state each time the button is hit before filling it again.
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators( { fetchRandomCat, fetchRandomDog } , dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomPetPage);