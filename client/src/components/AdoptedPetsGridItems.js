import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
 
const AdoptedPetsGridItem = ({ pets }) => {

    if (pets.length === 1) {
      return (
        <Grid>
          <Row style={{"display" : "flex", "flex-wrap": "wrap"}}>
            <Col xs={6} md={4}>
              <Thumbnail className="grid" src={pets[0].photo} alt={pets[0].name}>
                <h3>{pets[0].name}</h3>
                <h5>Breed: {pets[0].breed}</h5>
                <h5>Age: {pets[0].age}</h5>
                <h5>Sex: {pets[0].sex}</h5>
                <h5>Size: {pets[0].size}</h5>
                <h5>Contact: {pets[0].contact_email}</h5>
                <p>{pets[0].description}</p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      )
    } else if (pets.length === 2) {
      return (
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail className="grid" src={pets[0].photo} alt={pets[0].name}>
                <h3>{pets[0].name}</h3>
                <h5>Breed: {pets[0].breed}</h5>
                <h5>Age: {pets[0].age}</h5>
                <h5>Sex: {pets[0].sex}</h5>
                <h5>Size: {pets[0].size}</h5>
                <h5>Contact: {pets[0].contact_email}</h5>
                <p>{pets[0].description}</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail className="grid" src={pets[1].photo} alt={pets[1].name}>
                <h3>{pets[1].name}</h3>
                <h5>Breed: {pets[1].breed}</h5>
                <h5>Age: {pets[1].age}</h5>
                <h5>Sex: {pets[1].sex}</h5>
                <h5>Size: {pets[1].size}</h5>
                <h5>Contact: {pets[1].contact_email}</h5>
                <p>{pets[1].description}</p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid> 
      )
    } else if (pets.length === 3) {
        return (
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[0].photo} alt={pets[0].name}>
                  <h3>{pets[0].name}</h3>
                  <h5>Breed: {pets[0].breed}</h5>
                  <h5>Age: {pets[0].age}</h5>
                  <h5>Sex: {pets[0].sex}</h5>
                  <h5>Size: {pets[0].size}</h5>
                  <h5>Contact: {pets[0].contact_email}</h5>
                  <p>{pets[0].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[1].photo} alt={pets[1].name}>
                  <h3>{pets[1].name}</h3>
                  <h5>Breed: {pets[1].breed}</h5>
                  <h5>Age: {pets[1].age}</h5>
                  <h5>Sex: {pets[1].sex}</h5>
                  <h5>Size: {pets[1].size}</h5>
                  <h5>Contact: {pets[1].contact_email}</h5>
                  <p>{pets[1].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[2].photo} alt={pets[2].name}>
                  <h3>{pets[2].name}</h3>
                  <h5>Breed: {pets[2].breed}</h5>
                  <h5>Age: {pets[2].age}</h5>
                  <h5>Sex: {pets[2].sex}</h5>
                  <h5>Size: {pets[2].size}</h5>
                  <h5>Contact: {pets[2].contact_email}</h5>
                  <p>{pets[2].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </Grid>
        )
    } else if (pets.length === 4) {
      return (
        <Grid>
          <div>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[0].photo} alt={pets[0].name}>
                  <h3>{pets[0].name}</h3>
                  <h5>Breed: {pets[0].breed}</h5>
                  <h5>Age: {pets[0].age}</h5>
                  <h5>Sex: {pets[0].sex}</h5>
                  <h5>Size: {pets[0].size}</h5>
                  <h5>Contact: {pets[0].contact_email}</h5>
                  <p>{pets[0].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[1].photo} alt={pets[1].name}>
                  <h3>{pets[1].name}</h3>
                  <h5>Breed: {pets[1].breed}</h5>
                  <h5>Age: {pets[1].age}</h5>
                  <h5>Sex: {pets[1].sex}</h5>
                  <h5>Size: {pets[1].size}</h5>
                  <h5>Contact: {pets[1].contact_email}</h5>
                  <p>{pets[1].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[2].photo} alt={pets[2].name}>
                  <h3>{pets[2].name}</h3>
                  <h5>Breed: {pets[2].breed}</h5>
                  <h5>Age: {pets[2].age}</h5>
                  <h5>Sex: {pets[2].sex}</h5>
                  <h5>Size: {pets[2].size}</h5>
                  <h5>Contact: {pets[2].contact_email}</h5>
                  <p>{pets[2].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[3].photo} alt={pets[3].name}>
                  <h3>{pets[3].name}</h3>
                  <h5>Breed: {pets[3].breed}</h5>
                  <h5>Age: {pets[3].age}</h5>
                  <h5>Sex: {pets[3].sex}</h5>
                  <h5>Size: {pets[3].size}</h5>
                  <h5>Contact: {pets[3].contact_email}</h5>
                  <p>{pets[3].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </div>
        </Grid>
      )
    } else if (pets.length === 5) {
      return (
        <Grid>
          <div>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[0].photo} alt={pets[0].name}>
                  <h3>{pets[0].name}</h3>
                  <h5>Breed: {pets[0].breed}</h5>
                  <h5>Age: {pets[0].age}</h5>
                  <h5>Sex: {pets[0].sex}</h5>
                  <h5>Size: {pets[0].size}</h5>
                  <h5>Contact: {pets[0].contact_email}</h5>
                  <p>{pets[0].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[1].photo} alt={pets[1].name}>
                  <h3>{pets[1].name}</h3>
                  <h5>Breed: {pets[1].breed}</h5>
                  <h5>Age: {pets[1].age}</h5>
                  <h5>Sex: {pets[1].sex}</h5>
                  <h5>Size: {pets[1].size}</h5>
                  <h5>Contact: {pets[1].contact_email}</h5>
                  <p>{pets[1].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[2].photo} alt={pets[2].name}>
                  <h3>{pets[2].name}</h3>
                  <h5>Breed: {pets[2].breed}</h5>
                  <h5>Age: {pets[2].age}</h5>
                  <h5>Sex: {pets[2].sex}</h5>
                  <h5>Size: {pets[2].size}</h5>
                  <h5>Contact: {pets[2].contact_email}</h5>
                  <p>{pets[2].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
            <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[3].photo} alt={pets[3].name}>
                  <h3>{pets[3].name}</h3>
                  <h5>Breed: {pets[3].breed}</h5>
                  <h5>Age: {pets[3].age}</h5>
                  <h5>Sex: {pets[3].sex}</h5>
                  <h5>Size: {pets[3].size}</h5>
                  <h5>Contact: {pets[3].contact_email}</h5>
                  <p>{pets[3].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[4].photo} alt={pets[4].name}>
                  <h3>{pets[4].name}</h3>
                  <h5>Breed: {pets[4].breed}</h5>
                  <h5>Age: {pets[4].age}</h5>
                  <h5>Sex: {pets[4].sex}</h5>
                  <h5>Size: {pets[4].size}</h5>
                  <h5>Contact: {pets[4].contact_email}</h5>
                  <p>{pets[4].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </div>
        </Grid>
      )  
    } else if (pets.length === 6) {
      return (
        <Grid>
          <div>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[0].photo} alt={pets[0].name}>
                  <h3>{pets[0].name}</h3>
                  <h5>Breed: {pets[0].breed}</h5>
                  <h5>Age: {pets[0].age}</h5>
                  <h5>Sex: {pets[0].sex}</h5>
                  <h5>Size: {pets[0].size}</h5>
                  <h5>Contact: {pets[0].contact_email}</h5>
                  <p>{pets[0].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[1].photo} alt={pets[1].name}>
                  <h3>{pets[1].name}</h3>
                  <h5>Breed: {pets[1].breed}</h5>
                  <h5>Age: {pets[1].age}</h5>
                  <h5>Sex: {pets[1].sex}</h5>
                  <h5>Size: {pets[1].size}</h5>
                  <h5>Contact: {pets[1].contact_email}</h5>
                  <p>{pets[1].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[2].photo} alt={pets[2].name}>
                  <h3>{pets[2].name}</h3>
                  <h5>Breed: {pets[2].breed}</h5>
                  <h5>Age: {pets[2].age}</h5>
                  <h5>Sex: {pets[2].sex}</h5>
                  <h5>Size: {pets[2].size}</h5>
                  <h5>Contact: {pets[2].contact_email}</h5>
                  <p>{pets[2].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[3].photo} alt={pets[3].name}>
                  <h3>{pets[3].name}</h3>
                  <h5>Breed: {pets[3].breed}</h5>
                  <h5>Age: {pets[3].age}</h5>
                  <h5>Sex: {pets[3].sex}</h5>
                  <h5>Size: {pets[3].size}</h5>
                  <h5>Contact: {pets[3].contact_email}</h5>
                  <p>{pets[3].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[4].photo} alt={pets[4].name}>
                  <h3>{pets[4].name}</h3>
                  <h5>Breed: {pets[4].breed}</h5>
                  <h5>Age: {pets[4].age}</h5>
                  <h5>Sex: {pets[4].sex}</h5>
                  <h5>Size: {pets[4].size}</h5>
                  <h5>Contact: {pets[4].contact_email}</h5>
                  <p>{pets[4].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[5].photo} alt={pets[5].name}>
                  <h3>{pets[5].name}</h3>
                  <h5>Breed: {pets[5].breed}</h5>
                  <h5>Age: {pets[5].age}</h5>
                  <h5>Sex: {pets[5].sex}</h5>
                  <h5>Size: {pets[5].size}</h5>
                  <h5>Contact: {pets[5].contact_email}</h5>
                  <p>{pets[5].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </div>
        </Grid>
      )
    } else if (pets.length === 7) {
      return (
        <Grid>
          <div>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[0].photo} alt={pets[0].name}>
                  <h3>{pets[0].name}</h3>
                  <h5>Breed: {pets[0].breed}</h5>
                  <h5>Age: {pets[0].age}</h5>
                  <h5>Sex: {pets[0].sex}</h5>
                  <h5>Size: {pets[0].size}</h5>
                  <h5>Contact: {pets[0].contact_email}</h5>
                  <p>{pets[0].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[1].photo} alt={pets[1].name}>
                  <h3>{pets[1].name}</h3>
                  <h5>Breed: {pets[1].breed}</h5>
                  <h5>Age: {pets[1].age}</h5>
                  <h5>Sex: {pets[1].sex}</h5>
                  <h5>Size: {pets[1].size}</h5>
                  <h5>Contact: {pets[1].contact_email}</h5>
                  <p>{pets[1].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[2].photo} alt={pets[2].name}>
                  <h3>{pets[2].name}</h3>
                  <h5>Breed: {pets[2].breed}</h5>
                  <h5>Age: {pets[2].age}</h5>
                  <h5>Sex: {pets[2].sex}</h5>
                  <h5>Size: {pets[2].size}</h5>
                  <h5>Contact: {pets[2].contact_email}</h5>
                  <p>{pets[2].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[3].photo} alt={pets[3].name}>
                  <h3>{pets[3].name}</h3>
                  <h5>Breed: {pets[3].breed}</h5>
                  <h5>Age: {pets[3].age}</h5>
                  <h5>Sex: {pets[3].sex}</h5>
                  <h5>Size: {pets[3].size}</h5>
                  <h5>Contact: {pets[3].contact_email}</h5>
                  <p>{pets[3].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[4].photo} alt={pets[4].name}>
                  <h3>{pets[4].name}</h3>
                  <h5>Breed: {pets[4].breed}</h5>
                  <h5>Age: {pets[4].age}</h5>
                  <h5>Sex: {pets[4].sex}</h5>
                  <h5>Size: {pets[4].size}</h5>
                  <h5>Contact: {pets[4].contact_email}</h5>
                  <p>{pets[4].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[5].photo} alt={pets[5].name}>
                  <h3>{pets[5].name}</h3>
                  <h5>Breed: {pets[5].breed}</h5>
                  <h5>Age: {pets[5].age}</h5>
                  <h5>Sex: {pets[5].sex}</h5>
                  <h5>Size: {pets[5].size}</h5>
                  <h5>Contact: {pets[5].contact_email}</h5>
                  <p>{pets[5].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[6].photo} alt={pets[6].name}>
                  <h3>{pets[6].name}</h3>
                  <h5>Breed: {pets[6].breed}</h5>
                  <h5>Age: {pets[6].age}</h5>
                  <h5>Sex: {pets[6].sex}</h5>
                  <h5>Size: {pets[6].size}</h5>
                  <h5>Contact: {pets[6].contact_email}</h5>
                  <p>{pets[6].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </div>
        </Grid>
      )  
    } else if (pets.length === 8) {
      return (
        <Grid>
          <div>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[0].photo} alt={pets[0].name}>
                  <h3>{pets[0].name}</h3>
                  <h5>Breed: {pets[0].breed}</h5>
                  <h5>Age: {pets[0].age}</h5>
                  <h5>Sex: {pets[0].sex}</h5>
                  <h5>Size: {pets[0].size}</h5>
                  <h5>Contact: {pets[0].contact_email}</h5>
                  <p>{pets[0].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[1].photo} alt={pets[1].name}>
                  <h3>{pets[1].name}</h3>
                  <h5>Breed: {pets[1].breed}</h5>
                  <h5>Age: {pets[1].age}</h5>
                  <h5>Sex: {pets[1].sex}</h5>
                  <h5>Size: {pets[1].size}</h5>
                  <h5>Contact: {pets[1].contact_email}</h5>
                  <p>{pets[1].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[2].photo} alt={pets[2].name}>
                  <h3>{pets[2].name}</h3>
                  <h5>Breed: {pets[2].breed}</h5>
                  <h5>Age: {pets[2].age}</h5>
                  <h5>Sex: {pets[2].sex}</h5>
                  <h5>Size: {pets[2].size}</h5>
                  <h5>Contact: {pets[2].contact_email}</h5>
                  <p>{pets[2].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[3].photo} alt={pets[3].name}>
                  <h3>{pets[3].name}</h3>
                  <h5>Breed: {pets[3].breed}</h5>
                  <h5>Age: {pets[3].age}</h5>
                  <h5>Sex: {pets[3].sex}</h5>
                  <h5>Size: {pets[3].size}</h5>
                  <h5>Contact: {pets[3].contact_email}</h5>
                  <p>{pets[3].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[4].photo} alt={pets[4].name}>
                  <h3>{pets[4].name}</h3>
                  <h5>Breed: {pets[4].breed}</h5>
                  <h5>Age: {pets[4].age}</h5>
                  <h5>Sex: {pets[4].sex}</h5>
                  <h5>Size: {pets[4].size}</h5>
                  <h5>Contact: {pets[4].contact_email}</h5>
                  <p>{pets[4].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[5].photo} alt={pets[5].name}>
                  <h3>{pets[5].name}</h3>
                  <h5>Breed: {pets[5].breed}</h5>
                  <h5>Age: {pets[5].age}</h5>
                  <h5>Sex: {pets[5].sex}</h5>
                  <h5>Size: {pets[5].size}</h5>
                  <h5>Contact: {pets[5].contact_email}</h5>
                  <p>{pets[5].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[6].photo} alt={pets[6].name}>
                  <h3>{pets[6].name}</h3>
                  <h5>Breed: {pets[6].breed}</h5>
                  <h5>Age: {pets[6].age}</h5>
                  <h5>Sex: {pets[6].sex}</h5>
                  <h5>Size: {pets[6].size}</h5>
                  <h5>Contact: {pets[6].contact_email}</h5>
                  <p>{pets[6].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={pets[7].photo} alt={pets[7].name}>
                  <h3>{pets[7].name}</h3>
                  <h5>Breed: {pets[7].breed}</h5>
                  <h5>Age: {pets[7].age}</h5>
                  <h5>Sex: {pets[7].sex}</h5>
                  <h5>Size: {pets[7].size}</h5>
                  <h5>Contact: {pets[7].contact_email}</h5>
                  <p>{pets[7].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </div>
        </Grid>
      )
    }
  }

 
export default AdoptedPetsGridItem;