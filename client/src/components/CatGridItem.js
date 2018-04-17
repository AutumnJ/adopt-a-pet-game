import React from 'react';
import '../App.css';
// import { Image } from 'react-bootstrap';
 
const CatGridItem = ({ photo, onClick, id }) => {
  //cound do <Image src={photo} responsive rounded alt="KITTIES"/>
  const renderPet = <img src={ photo } id={ id } style={{'height' : '75%', 'width' : '85%', 'objectFit' : 'contain'}} onClick={ onClick } alt="KITTIES"/>
 
  return (
    <td style={{'width' : '25%', 'height' : '25%'}}>
      {renderPet}
    </td>
  );

};
 
export default CatGridItem;