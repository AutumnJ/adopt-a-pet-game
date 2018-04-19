import React from 'react';
import '../App.css';
// import { Image } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
 
export const RandomCat = ({ cat }) => {
  console.log(cat)
  //cound do <Image src={photo} responsive rounded alt="KITTIES"/>
  if (cat === null) {
    return (
      <p></p>
    )
  } else {
    return (
      <Thumbnail src={cat.photo} alt={cat.name}>
        <h3>{cat.name}</h3>
        <h5>Breed: {cat.breed}</h5>
        <h5>Age: {cat.age}</h5>
        <h5>Sex: {cat.sex}</h5>
        <h5>Size: {cat.size}</h5>
        <h5>Location: {cat.contact_city} {cat.contact_state}</h5>
        <h5>Contact: {cat.contact_email}</h5>
        <p>{cat.description}</p>
      </Thumbnail>
    )
  }
 
  // return (
  //   <td style={{'width' : '25%', 'height' : '25%'}}>
  //     {renderPet}
  //   </td>
  // );

};
 
