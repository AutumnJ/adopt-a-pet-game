import React, { Component } from "react";
// import uuid from 'uuid';
import { connect } from "react-redux";
// import { Route, Switch, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/catActions";
import { Table } from 'react-bootstrap';
import '../App.css';
import CatGridList from '../components/CatGridList'

class CatsGrid extends Component {

    constructor() {
      super();

      this.state = {
        pets: []
      }
    }
    
    //on click sub in '' for pic
    //randomly disappear sub in ''

    render(){
    const { cats, actions, msg } = this.props;
    
    console.log(this.props)

    return (
      <div>
        <h4>GO!</h4>
         <Table bordered condensed>
          <tbody id="table-container">
            <tr>
              <CatGridList photo={cats.cats[0].photo} />
              <CatGridList photo={cats.cats[1].photo} />
              <CatGridList photo={cats.cats[2].photo} />
              <CatGridList photo={cats.cats[3].photo} />
            </tr>
            <tr>
              <CatGridList photo={cats.cats[4].photo} />
              <CatGridList photo={cats.cats[5].photo} />
              <CatGridList photo={cats.cats[6].photo} />
              <CatGridList photo={cats.cats[7].photo} />
            </tr>
            <tr>
              <CatGridList photo={cats.cats[8].photo} />
              <CatGridList photo={cats.cats[9].photo} />
              <CatGridList photo={cats.cats[10].photo} />
              <CatGridList photo={cats.cats[11].photo} />
            </tr>
            <tr>
              <CatGridList photo={cats.cats[12].photo} />
              <CatGridList photo={cats.cats[13].photo} />
              <CatGridList photo={cats.cats[14].photo} />
              <CatGridList photo={cats.cats[15].photo} />
            </tr>
          </tbody>
        </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(CatsGrid);