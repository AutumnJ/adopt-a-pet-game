import React, { Component } from "react";
 
class PetGridItem extends Component {
 
  render() {
      const renderPet = <img src={ this.props.photo } id={ this.props.id } style={{'height' : '100%', 'maxWidth' : '100%', 'objectFit' : 'contain'}} onClick={ this.props.onClick } alt="KITTIES"/>
    return (
      <td style={{'width' : '200px', 'height' : '200px'}}>
        {renderPet}
      </td>
    );
  }

};
 
export default PetGridItem;