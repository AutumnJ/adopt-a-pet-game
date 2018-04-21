import React from 'react';

import { Thumbnail } from 'react-bootstrap';
import StockKitty from '../lib/StockKitty.png'
import StockPuppy from '../lib/StockPuppy.png'
 
export const RandomPet = ({ pet, type }) => {

  if (pet === null) {
    return (
      <p></p>
    )
  } else {

     const photo = ( pet.photo === null ? ( type === "cat" ? StockKitty : StockPuppy) : pet.photo )
    
    return (
      <Thumbnail src={photo} alt={pet.name}>
        <h3>{pet.name}</h3>
        <h5>Breed: {pet.breed}</h5>
        <h5>Age: {pet.age}</h5>
        <h5>Sex: {pet.sex}</h5>
        <h5>Size: {pet.size}</h5>
        <h5>Location: {pet.contact_city}</h5>
        <h5>Contact: {pet.contact_email}</h5>
        <p>{pet.description}</p>
      </Thumbnail>
    )
  }

};
 
