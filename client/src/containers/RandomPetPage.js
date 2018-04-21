import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, ButtonToolbar } from 'react-bootstrap';
import { bindActionCreators } from "redux";

import { fetchRandomCat } from "../actions/catActions";
import { fetchRandomDog } from "../actions/dogActions";
import { Grid, Row, Col } from 'react-bootstrap';
import { RandomPet } from '../components/RandomPet'

class RandomPetPage extends Component {

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
            <Row id="random">
              <Col xs={6}>
                <RandomPet pet={dog} type={dog} />
              </Col>
              <Col xs={6}>
                <RandomPet pet={cat} type={cat}/>
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
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators( { fetchRandomCat, fetchRandomDog } , dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomPetPage);