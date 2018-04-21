import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import AdoptedPetThumbnail from './AdoptedPetThumbnail'
 
const AdoptedPetGridItems = ({ pets }) => {
  let child1 =
  <div>
    <AdoptedPetThumbnail pet={pets[0] ? pets[0] : null} />
    {pets[1] ? <AdoptedPetThumbnail pet={pets[1]} /> : ''}
    {pets[2] ? <AdoptedPetThumbnail pet={pets[2]} /> : ''}
  </div>
    let child2 = 
  <div>
    {pets[3] ? <AdoptedPetThumbnail pet={pets[3]} /> : ''}
    {pets[4] ? <AdoptedPetThumbnail pet={pets[4]} /> : ''}
    {pets[5] ? <AdoptedPetThumbnail pet={pets[5]} /> : ''}
  </div>
    let child3 = 
  <div>
    {pets[6] ? <AdoptedPetThumbnail pet={pets[6]} /> : ''}
    {pets[7] ? <AdoptedPetThumbnail pet={pets[7]} /> : ''}
  </div>

  return (
    <Grid>
      <Row>
        {child1}
      </Row>
      <Row>
        {child2}
      </Row>
      <Row>
        {child3}
      </Row>
    </Grid>
  );
}

export default AdoptedPetGridItems
