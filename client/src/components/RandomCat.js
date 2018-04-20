import React from 'react';

import { Thumbnail } from 'react-bootstrap';
import StockKitty from '../lib/StockKitty.png'
 
export const RandomCat = ({ cat }) => {

  if (cat === null) {
    return (
      <p></p>
    )
  } else {
    const photo = ( cat.photo === null ? StockKitty : cat.photo )
    return (
      <Thumbnail src={photo} alt={cat.name}>
        <h3>{cat.name}</h3>
        <h5>Breed: {cat.breed}</h5>
        <h5>Age: {cat.age}</h5>
        <h5>Sex: {cat.sex}</h5>
        <h5>Size: {cat.size}</h5>
        <h5>Location: {cat.contact_city}</h5>
        <h5>Contact: {cat.contact_email}</h5>
        <p>{cat.description}</p>
      </Thumbnail>
    )
  }

};
 
