import React, { Component } from "react";
// import uuid from 'uuid';
import { connect } from "react-redux";
// import { Route, Switch, Link } from "react-router-dom";
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

class AdoptedCats extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adopted: this.props.adopted
    }
  }

  render(){

    // const thumbnailKitties = this.state.adopted.map(kitty =>
    //   <Col xs={6} md={4}>
    //     <Thumbnail src={kitty.photo} alt={kitty.name}>
    //       <h3>{kitty.name}</h3>
    //       <p>{kitty.description}</p>
    //     </Thumbnail>
    //   </Col>
    // )
    console.log(this.state.adopted[0])

    // console.log(this.props.cats.cats.length)

    //THIS NEEDS TO SCALE TO SHOW AS MANY CATS AS THERE ARE!
    if (this.state.adopted[0]) {
      return (
        <div>
          <h1 className="cats-header">"You got me!<small className="text-muted">Now take me home!</small>"</h1>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail src={this.state.adopted[0].photo} alt={this.state.adopted[0].name}>
                  <h3>{this.state.adopted[0].name}</h3>
                  <p>{this.state.adopted[0].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </Grid>;
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="cats-header">"You got me!<small className="text-muted">Now take me home!</small>"</h1>
        </div>
      )
    }
  }
}


//NOT SURE ANY OF THIS IS NEEDED -> CAN THIS JUST BE A COMPONENT? 
// const mapStateToProps = state => {
//   return {
//     cats: state.cats
//   };
// };

// // const mapDispatchToProps = dispatch => {
// //   return { actions: bindActionCreators(actions, dispatch) };
// // };

// export default connect(mapStateToProps)(AdoptedCats);

export default AdoptedCats