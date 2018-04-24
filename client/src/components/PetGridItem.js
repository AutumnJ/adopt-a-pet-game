
// import { Button, ButtonToolbar } from 'react-bootstrap';
import React, { Component } from "react";
// import fetch from 'isomorphic-fetch';
 
class PetGridItem extends Component {

  // constructor() {
  //   super();

  //   this.state = {
  //     upvotes: 0
  //   };
  // }

  // Upvote = () => {
  //   this.setState({
  //     upvotes: (this.state.upvotes + 1)
  //   })
  // }

  // callApi = () => {
  //   console.log('a')
  //   fetch(`http://localhost:3001/cafdsfdsfdsts`)
  //   .then(response => {

  //     if (response.ok) {

  //       console.log('b')

  //       return response.json()
  //       } else {
  //       throw new Error(response.statusText)
  //     }
  //     })
      
  //   .then(data => console.log('c', data))
  //   .catch(err => console.log('d', err));
  //     console.log('e')
      
  //     // a e b c + data  
  //     // a e d 
  // }
 
  render() {
      // console.log(this.props)
      const renderPet = <img src={ this.props.photo } id={ this.props.id } style={{'height' : '100%', 'maxWidth' : '100%', 'objectFit' : 'contain'}} onClick={ this.props.onClick } alt="KITTIES"/>
    return (
      <td style={{'width' : '200px', 'height' : '200px'}}>
        {renderPet}
      </td>
    );
  }

};
 
export default PetGridItem;

//from render:
          // <ButtonToolbar>
          //   <Button bsStyle="primary" bsSize="small" onClick={this.Upvote}>
          //     Like
          //   </Button>
          //   <Button bsStyle="primary" bsSize="small" onClick={this.callApi}>
          //     Call Api
          //   </Button>
          // </ButtonToolbar>
          // {this.state.upvotes}