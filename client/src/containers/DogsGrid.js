import React, { Component } from "react";
// import uuid from 'uuid';
import { connect } from "react-redux";
// import { Route, Switch, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/dogActions";
import { Table } from 'react-bootstrap';
import '../App.css';
import CatGridItem from '../components/CatGridItem'
import LittlePup from '../lib/LittlePup.jpg'
import Adopted from '../lib/Adopted.png'
import AdoptedDogs from './AdoptedDogs'
import { PetErrorPage } from '../components/PetErrorPage'

class DogsGrid extends Component {

    constructor(props) {
      super(props);

      this.state = {
        dogs: this.mapDogs(this.props.dogs),
        adoptedDogs: []
      }
    }

    //Should this just go in constructor?
    // componentWillMount() {
    //   this.setState({
    //     dogs: this.props.dogs.dogs,
    //     adopteddogs: []
    //   })
    // }

    mapDogs(dogs) {
      let newArray = []

      dogs.forEach(dog => {
        newArray.push(Object.assign({}, dog))
      })
      console.log("NEW ARRAY")
      console.log(newArray)
      return newArray;
    }

    componentWillUnmount() {
      this.setState({
        dogs: [],
        adoptedDogs: [],
      })
    }

    handleOnClick = (event) => {
      event.preventDefault();
      const { id } = event.target;
      const { dogs, adoptedDogs } = this.state

      const doggo = dogs.find( dog => dog.id === parseInt(id) );
      const doggoInd = dogs.findIndex( dog => dog.id === parseInt(id));
      if (doggo.photo !== "/static/media/LittlePup.df8ef6dd.jpg" && doggo.photo !== "/static/media/Adopted.e366e9ec.png") {
        let adoptedDog = Object.assign({}, doggo);
        adoptedDogs.push(adoptedDog);
        doggo.photo = Adopted;

        this.setState({
          dogs: dogs,
          adoptedDogs: adoptedDogs
        })

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

        this.setState({
          dogs: dogs,
          // adopteddogs: adopteddogs
        })
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
    const { dogs } = this.state;
    // console.log("dogs round 1:")
    // console.log(dogs)
    // console.log("cat state round 1:" )
    // console.log(this.state)
    console.log("grid")
    console.log(this.state)

    if (this.state.dogs.length === 0) {
      return(<PetErrorPage pet={"dog"}/>)
    } else {
      return (
        <div style={{"paddingTop" : "10px"}} >
           <Table bordered condensed>
            <tbody id="table-container">
              <tr>
                <CatGridItem photo={dogs[0].photo} onClick={this.handleOnClick} id={dogs[0].id} />
                <CatGridItem photo={dogs[1].photo} onClick={this.handleOnClick} id={dogs[1].id} />
                <CatGridItem photo={dogs[2].photo} onClick={this.handleOnClick} id={dogs[2].id} />
                <CatGridItem photo={dogs[3].photo} onClick={this.handleOnClick} id={dogs[3].id} />
              </tr>
              <tr>
                <CatGridItem photo={dogs[4].photo} onClick={this.handleOnClick} id={dogs[4].id}/>
                <CatGridItem photo={dogs[5].photo} onClick={this.handleOnClick} id={dogs[5].id} />
                <CatGridItem photo={dogs[6].photo} onClick={this.handleOnClick} id={dogs[6].id} />
                <CatGridItem photo={dogs[7].photo} onClick={this.handleOnClick} id={dogs[7].id} />
              </tr>
              <tr>
                <CatGridItem photo={dogs[8].photo} onClick={this.handleOnClick} id={dogs[8].id} />
                <CatGridItem photo={dogs[9].photo} onClick={this.handleOnClick} id={dogs[9].id} />
                <CatGridItem photo={dogs[10].photo} onClick={this.handleOnClick} id={dogs[10].id} />
                <CatGridItem photo={dogs[11].photo} onClick={this.handleOnClick} id={dogs[11].id} />
              </tr>
              <tr>
                <CatGridItem photo={dogs[12].photo} onClick={this.handleOnClick} id={dogs[12].id} />
                <CatGridItem photo={dogs[13].photo} onClick={this.handleOnClick} id={dogs[13].id} />
                <CatGridItem photo={dogs[14].photo} onClick={this.handleOnClick} id={dogs[14].id} />
                <CatGridItem photo={dogs[15].photo} onClick={this.handleOnClick} id={dogs[15].id} />
              </tr>
            </tbody>
          </Table>
          <AdoptedDogs adopted={this.state.adoptedDogs}/>
        </div>
      );
    }
  }
}

//back this up a level and just pass the state in to this form as props?

// const mapStateToProps = state => {
//   return {
//     dogs: state.dogs
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return { actions: bindActionCreators(actions, dispatch) };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(dogsGrid);

export default DogsGrid;