import React from 'react';
import '../App.css';
// import { Image } from 'react-bootstrap';
 
const CatGridList = ({ photo }) => {
  //cound do <Image src={photo} responsive rounded alt="KITTIES"/>
  const renderPet = <img src={photo} style={{'height' : '75%', 'width' : '85%', 'objectFit' : 'contain'}} alt="KITTIES"/>
 
  return (
    <td style={{'width' : '25%', 'height' : '25%'}}>
      {renderPet}
    </td>
  );

};
 
export default CatGridList;