import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';

import PetGridItem from './PetGridItem'
import IMG_5695 from '../lib/IMG_5695.jpg'
import Adopted from '../lib/Adopted.png'
import AdoptedCats from './AdoptedCats'
import { PetErrorPage } from './PetErrorPage'
import { adoptCat, clearGame, playGame } from '../actions/catActions'

class CatsGrid extends Component {

    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     cats: (this.props.catGame[0] ? this.props.catGame : this.mapCats(this.props.cats))
    //     // adoptedCats: []
    //   }
    // }
    
    // // if we don't want to push changes up to state
    // mapCats(cats) {
    //   let newArray = []

    //   cats.forEach(cat => {
    //     newArray.push(Object.assign({}, cat))
    //   })
    //   return newArray;
    // }

    // componentWillUnmount() {
    //   this.setState({
    //     cats: [],
    //     adoptedCats: [],
    //   })
    // }

    //action.adoptCat(cat)

    handleOnPlayAgain = event => {
      event.preventDefault(); 

      this.props.clearGame();
      this.props.playGame();
    }

    handleOnClick = (event) => {
      event.preventDefault();
      const { id } = event.target;
      // const { cats, adoptedCats } = this.state
      const cats = this.props.catGame


      const kitty = cats.find( cat => cat.id === parseInt(id, 10) );
      if (kitty.photo !== "/static/media/IMG_5695.7d23606d.jpg" && kitty.photo !== "/static/media/Adopted.e366e9ec.png") {
        let adoptedKitty = Object.assign({}, kitty);
        // adoptedCats.push(adoptedKitty);
        this.props.adoptCat(adoptedKitty);
        kitty.photo = Adopted;
        // this.props.playGame(kitty);

        // this.setState({
        //   cats: cats,
        //   adoptedCats: adoptedCats
        // })

        this.disappearCat(cats);

      } else {
        this.disappearCat(cats);
      }
    }

    disappearCat = (cats) => {
      let replacement = this.replacementInd();

      if (cats[replacement].photo !== "/static/media/IMG_5695.7d23606d.jpg" && cats[replacement].photo !== "/static/media/Adopted.e366e9ec.png") {
        let goneKitty = cats[replacement];
        goneKitty.photo = IMG_5695;
        // this.props.playGame(goneKitty);

        this.setState({
          cats: cats,
        })
      } else if (cats.find( cat => cat.photo !== "/static/media/IMG_5695.7d23606d.jpg" && cat.photo !== "/static/media/Adopted.e366e9ec.png")) {
        this.disappearCat(cats);
      } else {
        return;
      }
    } 

    replacementInd() {
      return (Math.floor((Math.random() * 16) + 1) - 1);
    }

    render(){
    const cats = this.props.catGame

    if (cats.length === 0) {
      return(<PetErrorPage pet={"cat"}/>)
    } else {
      // console.log(this.state.cats)
      return (
        <div style={{"paddingTop" : "15px"}} >
            <ButtonToolbar>
              <Button className="random-pet-btn" bsStyle="primary" bsSize="large" onClick={this.handleOnPlayAgain}>
                Play Again
              </Button>
            </ButtonToolbar>
           <Table bordered condensed>
            <tbody id="table-container">
              <tr>
                <PetGridItem photo={cats[0].photo} onClick={this.handleOnClick} id={cats[0].id} />
                <PetGridItem photo={cats[1].photo} onClick={this.handleOnClick} id={cats[1].id} />
                <PetGridItem photo={cats[2].photo} onClick={this.handleOnClick} id={cats[2].id} />
                <PetGridItem photo={cats[3].photo} onClick={this.handleOnClick} id={cats[3].id} />
              </tr>
              <tr>
                <PetGridItem photo={cats[4].photo} onClick={this.handleOnClick} id={cats[4].id}/>
                <PetGridItem photo={cats[5].photo} onClick={this.handleOnClick} id={cats[5].id} />
                <PetGridItem photo={cats[6].photo} onClick={this.handleOnClick} id={cats[6].id} />
                <PetGridItem photo={cats[7].photo} onClick={this.handleOnClick} id={cats[7].id} />
              </tr>
              <tr>
                <PetGridItem photo={cats[8].photo} onClick={this.handleOnClick} id={cats[8].id} />
                <PetGridItem photo={cats[9].photo} onClick={this.handleOnClick} id={cats[9].id} />
                <PetGridItem photo={cats[10].photo} onClick={this.handleOnClick} id={cats[10].id} />
                <PetGridItem photo={cats[11].photo} onClick={this.handleOnClick} id={cats[11].id} />
              </tr>
              <tr>
                <PetGridItem photo={cats[12].photo} onClick={this.handleOnClick} id={cats[12].id} />
                <PetGridItem photo={cats[13].photo} onClick={this.handleOnClick} id={cats[13].id} />
                <PetGridItem photo={cats[14].photo} onClick={this.handleOnClick} id={cats[14].id} />
                <PetGridItem photo={cats[15].photo} onClick={this.handleOnClick} id={cats[15].id} />
              </tr>
            </tbody>
          </Table>
          <AdoptedCats adopted={this.props.adoptedCats}/>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    adoptedCats: state.cats.adoptedCats,
    catGame: state.cats.catGame
  };
};

export default connect(mapStateToProps, { adoptCat, clearGame, playGame })(CatsGrid);