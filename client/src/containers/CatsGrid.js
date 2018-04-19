import React, { Component } from "react";
// import uuid from 'uuid';
import { connect } from "react-redux";
// import { Route, Switch, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/catActions";
import { Table } from 'react-bootstrap';
import '../App.css';
import CatGridItem from '../components/CatGridItem'
import IMG_5695 from '../lib/IMG_5695.jpg'
import Adopted from '../lib/Adopted.png'
import AdoptedCats from './AdoptedCats'
import { PetErrorPage } from '../components/PetErrorPage'

class CatsGrid extends Component {

    constructor(props) {
      super(props);

      this.state = {
        cats: this.mapCats(this.props.cats),
        adoptedCats: []
      }
    }

    //Should this just go in constructor?
    // componentWillMount() {
    //   this.setState({
    //     cats: this.props.cats.cats,
    //     adoptedCats: []
    //   })
    // }

    //can push changes to state object by removing this mapping (or dispatching action to change global state)
    //intentionally programmed so users can 'replay' several times and see different cats before entering a new zip
    mapCats(cats) {
      let newArray = []

      cats.forEach(cat => {
        newArray.push(Object.assign({}, cat))
      })
      console.log("NEW ARRAY")
      console.log(newArray)
      return newArray;
    }

    componentWillUnmount() {
      this.setState({
        cats: [],
        adoptedCats: [],
      })
    }

    handleOnClick = (event) => {
      event.preventDefault();
      const { id } = event.target;
      const { cats, adoptedCats } = this.state
      console.log("in event")
      console.log(cats)

      const kitty = cats.find( cat => cat.id === parseInt(id) );
      const kittyInd = cats.findIndex( cat => cat.id === parseInt(id));
      if (kitty.photo !== "/static/media/IMG_5695.7d23606d.jpg" && kitty.photo !== "/static/media/Adopted.e366e9ec.png") {
        let adoptedKitty = Object.assign({}, kitty);
        adoptedCats.push(adoptedKitty);
        kitty.photo = Adopted;

        this.setState({
          cats: cats,
          adoptedCats: adoptedCats
        })

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

        this.setState({
          cats: cats,
          // adoptedCats: adoptedCats
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
    const { cats } = this.state;
    // console.log("cats round 1:")
    // console.log(cats)
    // console.log("cat state round 1:" )
    // console.log(this.state)
    console.log("grid")
    console.log(this.state)

    if (this.state.cats.length === 0) {
      return(<PetErrorPage pet={"dog"}/>)
    } else {
      return (
        <div style={{"paddingTop" : "10px"}} >
           <Table bordered condensed>
            <tbody id="table-container">
              <tr>
                <CatGridItem photo={cats[0].photo} onClick={this.handleOnClick} id={cats[0].id} />
                <CatGridItem photo={cats[1].photo} onClick={this.handleOnClick} id={cats[1].id} />
                <CatGridItem photo={cats[2].photo} onClick={this.handleOnClick} id={cats[2].id} />
                <CatGridItem photo={cats[3].photo} onClick={this.handleOnClick} id={cats[3].id} />
              </tr>
              <tr>
                <CatGridItem photo={cats[4].photo} onClick={this.handleOnClick} id={cats[4].id}/>
                <CatGridItem photo={cats[5].photo} onClick={this.handleOnClick} id={cats[5].id} />
                <CatGridItem photo={cats[6].photo} onClick={this.handleOnClick} id={cats[6].id} />
                <CatGridItem photo={cats[7].photo} onClick={this.handleOnClick} id={cats[7].id} />
              </tr>
              <tr>
                <CatGridItem photo={cats[8].photo} onClick={this.handleOnClick} id={cats[8].id} />
                <CatGridItem photo={cats[9].photo} onClick={this.handleOnClick} id={cats[9].id} />
                <CatGridItem photo={cats[10].photo} onClick={this.handleOnClick} id={cats[10].id} />
                <CatGridItem photo={cats[11].photo} onClick={this.handleOnClick} id={cats[11].id} />
              </tr>
              <tr>
                <CatGridItem photo={cats[12].photo} onClick={this.handleOnClick} id={cats[12].id} />
                <CatGridItem photo={cats[13].photo} onClick={this.handleOnClick} id={cats[13].id} />
                <CatGridItem photo={cats[14].photo} onClick={this.handleOnClick} id={cats[14].id} />
                <CatGridItem photo={cats[15].photo} onClick={this.handleOnClick} id={cats[15].id} />
              </tr>
            </tbody>
          </Table>
          <AdoptedCats adopted={this.state.adoptedCats}/>
        </div>
      );
    }
  }
}

//back this up a level and just pass the state in to this form as props?

// const mapStateToProps = state => {
//   return {
//     cats: state.cats
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return { actions: bindActionCreators(actions, dispatch) };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CatsGrid);

export default CatsGrid;