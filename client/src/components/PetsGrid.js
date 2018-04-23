import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';

import PetGridItem from './PetGridItem'

class PetsGrid extends Component {

  handleOnPlayAgain = event => {
    event.preventDefault(); 

    this.props.clearGame();
    this.props.playGame();
  }

  handleOnClick = (event) => {
    event.preventDefault();
    const { id } = event.target;
    const pets = this.props.gamePets;

    const animal = pets.find( pet => pet.id === parseInt(id, 10) );
    if (animal.photo !== this.props.takenImgStatic && animal.photo !== this.props.adoptedImgStatic) {
      let adoptedPet = Object.assign({}, animal);
      this.props.adopt(adoptedPet);
      this.props.updatePhoto(animal, this.props.adoptedImg)

      let interval = setInterval((function(self, animal){
        return function(){
          console.log(animal)
          console.log(self.props.gamePets.find( pet => pet.id === parseInt(id, 10)))
          if (animal !== JSON.stringify(self.props.gamePets.find( pet => pet.id === parseInt(id, 10) ))) {

            clearInterval(interval);
            self.disappearPet(pets);
          }
        }
      })(this, animal), 200);

    } else {
      this.disappearPet(pets);
    }
  }

  disappearPet = (pets) => {
    let replacement = this.replacementInd();

    if (pets[replacement].photo !== this.props.takenImgStatic && pets[replacement].photo !== this.props.adoptedImgStatic) {
      if (this.props.adopted.find( pet => pet.id === replacement.id )) {
        this.disappearPet(pets);
      } else {
        let gonePet = pets[replacement];
        this.props.updatePhoto(gonePet, this.props.takenImg)
      }
    } else if (pets.find( pet => pet.photo !== this.props.takenImgStatic && pet.photo !== this.props.adoptedImgStatic)) {
      this.disappearPet(pets);
    } else {
      return;
    }
  } 

  replacementInd() {
    return (Math.floor((Math.random() * 16) + 1) - 1);
  }

  render(){
    const pets = this.props.gamePets

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
              <PetGridItem photo={pets[0].photo} onClick={this.handleOnClick} id={pets[0].id} />
              <PetGridItem photo={pets[1].photo} onClick={this.handleOnClick} id={pets[1].id} />
              <PetGridItem photo={pets[2].photo} onClick={this.handleOnClick} id={pets[2].id} />
              <PetGridItem photo={pets[3].photo} onClick={this.handleOnClick} id={pets[3].id} />
            </tr>
            <tr>
              <PetGridItem photo={pets[4].photo} onClick={this.handleOnClick} id={pets[4].id}/>
              <PetGridItem photo={pets[5].photo} onClick={this.handleOnClick} id={pets[5].id} />
              <PetGridItem photo={pets[6].photo} onClick={this.handleOnClick} id={pets[6].id} />
              <PetGridItem photo={pets[7].photo} onClick={this.handleOnClick} id={pets[7].id} />
            </tr>
            <tr>
              <PetGridItem photo={pets[8].photo} onClick={this.handleOnClick} id={pets[8].id} />
              <PetGridItem photo={pets[9].photo} onClick={this.handleOnClick} id={pets[9].id} />
              <PetGridItem photo={pets[10].photo} onClick={this.handleOnClick} id={pets[10].id} />
              <PetGridItem photo={pets[11].photo} onClick={this.handleOnClick} id={pets[11].id} />
            </tr>
            <tr>
              <PetGridItem photo={pets[12].photo} onClick={this.handleOnClick} id={pets[12].id} />
              <PetGridItem photo={pets[13].photo} onClick={this.handleOnClick} id={pets[13].id} />
              <PetGridItem photo={pets[14].photo} onClick={this.handleOnClick} id={pets[14].id} />
              <PetGridItem photo={pets[15].photo} onClick={this.handleOnClick} id={pets[15].id} />
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PetsGrid;