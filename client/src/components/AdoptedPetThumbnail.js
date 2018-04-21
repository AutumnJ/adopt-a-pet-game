import React from 'react';
import { Thumbnail, Col } from 'react-bootstrap';

const AdoptedPetThumbnail = ({ pet }) => {
  return (
    <Col xs={6} md={4}>
      <Thumbnail className="grid" src={pet.photo} alt={pet.name}>
        <h3>{pet.name}</h3>
        <h5>Breed: {pet.breed}</h5>
        <h5>Age: {pet.age}</h5>
        <h5>Sex: {pet.sex}</h5>
        <h5>Size: {pet.size}</h5>
        <h5>Contact: {pet.contact_email}</h5>
        <p>{pet.description}</p>
      </Thumbnail>
    </Col>
  )
}

export default AdoptedPetThumbnail