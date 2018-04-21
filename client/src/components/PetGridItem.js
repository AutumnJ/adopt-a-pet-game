import React from 'react';
 
const PetGridItem = ({ photo, onClick, id }) => {

  const renderPet = <img src={ photo } id={ id } style={{'height' : '100%', 'maxWidth' : '100%', 'objectFit' : 'contain'}} onClick={ onClick } alt="KITTIES"/>
 
  return (
    <td style={{'width' : '200px', 'height' : '200px'}}>
      {renderPet}
    </td>
  );

};
 
export default PetGridItem;