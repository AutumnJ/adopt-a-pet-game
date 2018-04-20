import React from 'react';

import { Thumbnail } from 'react-bootstrap';
import StockPuppy from '../lib/StockPuppy.png'
 
export const RandomDog = ({ dog }) => {

  if (dog === null) {
    return (
      <p></p>
    )
  } else {
    const photo = ( dog.photo === null ? StockPuppy : dog.photo )
    return (
      <Thumbnail src={photo} alt={dog.name}>
        <h3>{dog.name}</h3>
        <h5>Breed: {dog.breed}</h5>
        <h5>Age: {dog.age}</h5>
        <h5>Sex: {dog.sex}</h5>
        <h5>Size: {dog.size}</h5>
        <h5>Location: {dog.contact_city}</h5>
        <h5>Contact: {dog.contact_email}</h5>
        <p>{dog.description}</p>
      </Thumbnail>
    )
  }

};