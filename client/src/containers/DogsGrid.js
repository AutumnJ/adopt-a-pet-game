import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';

import PetGridItem from '../components/PetGridItem'
import LittlePup from '../lib/LittlePup.jpg'
import Adopted from '../lib/Adopted.png'
import AdoptedDogs from '../components/AdoptedDogs'
import { adoptDog, clearGame, playGame } from '../actions/dogActions'

class DogsGrid extends Component {

    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     dogs: this.mapDogs(this.props.dogs),
    //     adoptedDogs: []
    //   }
    // }

    // mapDogs(dogs) {
    //   let newArray = []

    //   dogs.forEach(dog => {
    //     newArray.push(Object.assign({}, dog))
    //   })
    //   return newArray;
    // }

    // componentWillUnmount() {
    //   this.setState({
    //     dogs: [],
    //     adoptedDogs: [],
    //   })
    // }


    handleOnPlayAgain = event => {
      event.preventDefault(); 

      this.props.clearGame();
      this.props.playGame();
    }

    handleOnClick = (event) => {
      event.preventDefault();
      const { id } = event.target;
      // const { dogs, adoptedDogs } = this.state
      const dogs = this.props.dogGame

      const doggo = dogs.find( dog => dog.id === parseInt(id, 10) );
      if (doggo.photo !== "/static/media/LittlePup.df8ef6dd.jpg" && doggo.photo !== "/static/media/Adopted.e366e9ec.png") {
        let adoptedDog = Object.assign({}, doggo);
        // adoptedDogs.push(adoptedDog);
        this.props.adoptDog(adoptedDog);
        doggo.photo = Adopted;

        // this.setState({
        //   dogs: dogs,
        //   adoptedDogs: adoptedDogs
        // })

        this.disappearDog(dogs);

      } else {
        this.disappearDog(dogs);
      }
    }

    disappearDog= (dogs) => {
      let replacement = this.replacementInd();

      if (dogs[replacement].photo !== "/static/media/LittlePup.df8ef6dd.jpg" && dogs[replacement].photo !== "/static/media/Adopted.e366e9ec.png") {
        let goneDog = dogs[replacement];
        goneDog.photo = LittlePup;

        // this.setState({
        //   dogs: dogs,
        // })
      } else if (dogs.find( dog => dog.photo !== "/static/media/LittlePup.df8ef6dd.jpg" && dog.photo !== "/static/media/Adopted.e366e9ec.png")) {
        this.disappearDog(dogs);
      } else {
        return;
      }
    } 

    replacementInd() {
      return (Math.floor((Math.random() * 16) + 1) - 1);
    }

    render(){
    const dogs = this.props.dogGame;

    // if (this.state.dogs.length === 0) {
    //   return(<PetErrorPage pet={"dog"}/>)
    // } else {
      return (
        <div>
            <ButtonToolbar style={{ "float": "right", "paddingBottom" : "15px", "paddingRight" : "15px" }}>
              <Button className="play-again-btn" bsStyle="primary" bsSize="large" onClick={this.handleOnPlayAgain}>
                Play Again
              </Button>
            </ButtonToolbar>
           <Table bordered condensed>
            <tbody id="table-container">
              <tr>
                <PetGridItem photo={dogs[0].photo} onClick={this.handleOnClick} id={dogs[0].id} />
                <PetGridItem photo={dogs[1].photo} onClick={this.handleOnClick} id={dogs[1].id} />
                <PetGridItem photo={dogs[2].photo} onClick={this.handleOnClick} id={dogs[2].id} />
                <PetGridItem photo={dogs[3].photo} onClick={this.handleOnClick} id={dogs[3].id} />
              </tr>
              <tr>
                <PetGridItem photo={dogs[4].photo} onClick={this.handleOnClick} id={dogs[4].id}/>
                <PetGridItem photo={dogs[5].photo} onClick={this.handleOnClick} id={dogs[5].id} />
                <PetGridItem photo={dogs[6].photo} onClick={this.handleOnClick} id={dogs[6].id} />
                <PetGridItem photo={dogs[7].photo} onClick={this.handleOnClick} id={dogs[7].id} />
              </tr>
              <tr>
                <PetGridItem photo={dogs[8].photo} onClick={this.handleOnClick} id={dogs[8].id} />
                <PetGridItem photo={dogs[9].photo} onClick={this.handleOnClick} id={dogs[9].id} />
                <PetGridItem photo={dogs[10].photo} onClick={this.handleOnClick} id={dogs[10].id} />
                <PetGridItem photo={dogs[11].photo} onClick={this.handleOnClick} id={dogs[11].id} />
              </tr>
              <tr>
                <PetGridItem photo={dogs[12].photo} onClick={this.handleOnClick} id={dogs[12].id} />
                <PetGridItem photo={dogs[13].photo} onClick={this.handleOnClick} id={dogs[13].id} />
                <PetGridItem photo={dogs[14].photo} onClick={this.handleOnClick} id={dogs[14].id} />
                <PetGridItem photo={dogs[15].photo} onClick={this.handleOnClick} id={dogs[15].id} />
              </tr>
            </tbody>
          </Table>
          <AdoptedDogs adopted={this.props.adoptedDogs}/>
        </div>
      );
    // }
  }
}

const mapStateToProps = state => {
  return {
    adoptedDogs: state.dogs.adoptedDogs,
    dogGame: state.dogs.dogGame
  };
};

export default connect(mapStateToProps, { adoptDog, clearGame, playGame })(DogsGrid);