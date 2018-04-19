import React from 'react';
import '../App.css';
// import { Image } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
 
export const RandomDog = ({ dog }) => {
  //cound do <Image src={photo} responsive rounded alt="KITTIES"/>
  if (dog === null) {
    return (
      <p></p>
    )
  } else {
    return (
      <Thumbnail src={dog.photo} alt={dog.name}>
        <h3>{dog.name}</h3>
        <h5>Breed: {dog.breed}</h5>
        <h5>Age: {dog.age}</h5>
        <h5>Sex: {dog.sex}</h5>
        <h5>Size: {dog.size}</h5>
        <h5>Location: {dog.contact_city} {dog.contact_state}</h5>
        <h5>Contact: {dog.contact_email}</h5>
        <p>{dog.description}</p>
      </Thumbnail>
    )
  }
 
  // return (
  //   <td style={{'width' : '25%', 'height' : '25%'}}>
  //     {renderPet}
  //   </td>
  // );

};