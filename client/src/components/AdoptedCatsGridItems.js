import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
 
const AdoptedcatsGridItem = ({ cats }) => {

    if (cats.length === 1) {
      return (
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail className="grid" src={cats[0].photo} alt={cats[0].name}>
                <h3>{cats[0].name}</h3>
                <h5>Breed: {cats[0].breed}</h5>
                <h5>Age: {cats[0].age}</h5>
                <h5>Sex: {cats[0].sex}</h5>
                <h5>Size: {cats[0].size}</h5>
                <h5>Contact: {cats[0].contact_email}</h5>
                <p>{cats[0].description}</p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      )
    } else if (cats.length === 2) {
      return (
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail className="grid" src={cats[0].photo} alt={cats[0].name}>
                <h3>{cats[0].name}</h3>
                <h5>Breed: {cats[0].breed}</h5>
                <h5>Age: {cats[0].age}</h5>
                <h5>Sex: {cats[0].sex}</h5>
                <h5>Size: {cats[0].size}</h5>
                <h5>Contact: {cats[0].contact_email}</h5>
                <p>{cats[0].description}</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail className="grid" src={cats[1].photo} alt={cats[1].name}>
                <h3>{cats[1].name}</h3>
                <h5>Breed: {cats[1].breed}</h5>
                <h5>Age: {cats[1].age}</h5>
                <h5>Sex: {cats[1].sex}</h5>
                <h5>Size: {cats[1].size}</h5>
                <h5>Contact: {cats[1].contact_email}</h5>
                <p>{cats[1].description}</p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid> 
      )
    } else if (cats.length === 3) {
        return (
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[0].photo} alt={cats[0].name}>
                  <h3>{cats[0].name}</h3>
                  <h5>Breed: {cats[0].breed}</h5>
                  <h5>Age: {cats[0].age}</h5>
                  <h5>Sex: {cats[0].sex}</h5>
                  <h5>Size: {cats[0].size}</h5>
                  <h5>Contact: {cats[0].contact_email}</h5>
                  <p>{cats[0].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[1].photo} alt={cats[1].name}>
                  <h3>{cats[1].name}</h3>
                  <h5>Breed: {cats[1].breed}</h5>
                  <h5>Age: {cats[1].age}</h5>
                  <h5>Sex: {cats[1].sex}</h5>
                  <h5>Size: {cats[1].size}</h5>
                  <h5>Contact: {cats[1].contact_email}</h5>
                  <p>{cats[1].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[2].photo} alt={cats[2].name}>
                  <h3>{cats[2].name}</h3>
                  <h5>Breed: {cats[2].breed}</h5>
                  <h5>Age: {cats[2].age}</h5>
                  <h5>Sex: {cats[2].sex}</h5>
                  <h5>Size: {cats[2].size}</h5>
                  <h5>Contact: {cats[2].contact_email}</h5>
                  <p>{cats[2].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </Grid>
        )
    } else if (cats.length === 4) {
      return (
        <Grid>
          <div>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[0].photo} alt={cats[0].name}>
                  <h3>{cats[0].name}</h3>
                  <h5>Breed: {cats[0].breed}</h5>
                  <h5>Age: {cats[0].age}</h5>
                  <h5>Sex: {cats[0].sex}</h5>
                  <h5>Size: {cats[0].size}</h5>
                  <h5>Contact: {cats[0].contact_email}</h5>
                  <p>{cats[0].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[1].photo} alt={cats[1].name}>
                  <h3>{cats[1].name}</h3>
                  <h5>Breed: {cats[1].breed}</h5>
                  <h5>Age: {cats[1].age}</h5>
                  <h5>Sex: {cats[1].sex}</h5>
                  <h5>Size: {cats[1].size}</h5>
                  <h5>Contact: {cats[1].contact_email}</h5>
                  <p>{cats[1].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[2].photo} alt={cats[2].name}>
                  <h3>{cats[2].name}</h3>
                  <h5>Breed: {cats[2].breed}</h5>
                  <h5>Age: {cats[2].age}</h5>
                  <h5>Sex: {cats[2].sex}</h5>
                  <h5>Size: {cats[2].size}</h5>
                  <h5>Contact: {cats[2].contact_email}</h5>
                  <p>{cats[2].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[3].photo} alt={cats[3].name}>
                  <h3>{cats[3].name}</h3>
                  <h5>Breed: {cats[3].breed}</h5>
                  <h5>Age: {cats[3].age}</h5>
                  <h5>Sex: {cats[3].sex}</h5>
                  <h5>Size: {cats[3].size}</h5>
                  <h5>Contact: {cats[3].contact_email}</h5>
                  <p>{cats[3].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </div>
        </Grid>
      )
    } else if (cats.length === 5) {
      return (
        <Grid>
          <div>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[0].photo} alt={cats[0].name}>
                  <h3>{cats[0].name}</h3>
                  <h5>Breed: {cats[0].breed}</h5>
                  <h5>Age: {cats[0].age}</h5>
                  <h5>Sex: {cats[0].sex}</h5>
                  <h5>Size: {cats[0].size}</h5>
                  <h5>Contact: {cats[0].contact_email}</h5>
                  <p>{cats[0].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[1].photo} alt={cats[1].name}>
                  <h3>{cats[1].name}</h3>
                  <h5>Breed: {cats[1].breed}</h5>
                  <h5>Age: {cats[1].age}</h5>
                  <h5>Sex: {cats[1].sex}</h5>
                  <h5>Size: {cats[1].size}</h5>
                  <h5>Contact: {cats[1].contact_email}</h5>
                  <p>{cats[1].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[2].photo} alt={cats[2].name}>
                  <h3>{cats[2].name}</h3>
                  <h5>Breed: {cats[2].breed}</h5>
                  <h5>Age: {cats[2].age}</h5>
                  <h5>Sex: {cats[2].sex}</h5>
                  <h5>Size: {cats[2].size}</h5>
                  <h5>Contact: {cats[2].contact_email}</h5>
                  <p>{cats[2].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
            <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[3].photo} alt={cats[3].name}>
                  <h3>{cats[3].name}</h3>
                  <h5>Breed: {cats[3].breed}</h5>
                  <h5>Age: {cats[3].age}</h5>
                  <h5>Sex: {cats[3].sex}</h5>
                  <h5>Size: {cats[3].size}</h5>
                  <h5>Contact: {cats[3].contact_email}</h5>
                  <p>{cats[3].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[4].photo} alt={cats[4].name}>
                  <h3>{cats[4].name}</h3>
                  <h5>Breed: {cats[4].breed}</h5>
                  <h5>Age: {cats[4].age}</h5>
                  <h5>Sex: {cats[4].sex}</h5>
                  <h5>Size: {cats[4].size}</h5>
                  <h5>Contact: {cats[4].contact_email}</h5>
                  <p>{cats[4].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </div>
        </Grid>
      )  
    } else if (cats.length === 6) {
      return (
        <Grid>
          <div>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[0].photo} alt={cats[0].name}>
                  <h3>{cats[0].name}</h3>
                  <h5>Breed: {cats[0].breed}</h5>
                  <h5>Age: {cats[0].age}</h5>
                  <h5>Sex: {cats[0].sex}</h5>
                  <h5>Size: {cats[0].size}</h5>
                  <h5>Contact: {cats[0].contact_email}</h5>
                  <p>{cats[0].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[1].photo} alt={cats[1].name}>
                  <h3>{cats[1].name}</h3>
                  <h5>Breed: {cats[1].breed}</h5>
                  <h5>Age: {cats[1].age}</h5>
                  <h5>Sex: {cats[1].sex}</h5>
                  <h5>Size: {cats[1].size}</h5>
                  <h5>Contact: {cats[1].contact_email}</h5>
                  <p>{cats[1].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[2].photo} alt={cats[2].name}>
                  <h3>{cats[2].name}</h3>
                  <h5>Breed: {cats[2].breed}</h5>
                  <h5>Age: {cats[2].age}</h5>
                  <h5>Sex: {cats[2].sex}</h5>
                  <h5>Size: {cats[2].size}</h5>
                  <h5>Contact: {cats[2].contact_email}</h5>
                  <p>{cats[2].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[3].photo} alt={cats[3].name}>
                  <h3>{cats[3].name}</h3>
                  <h5>Breed: {cats[3].breed}</h5>
                  <h5>Age: {cats[3].age}</h5>
                  <h5>Sex: {cats[3].sex}</h5>
                  <h5>Size: {cats[3].size}</h5>
                  <h5>Contact: {cats[3].contact_email}</h5>
                  <p>{cats[3].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[4].photo} alt={cats[4].name}>
                  <h3>{cats[4].name}</h3>
                  <h5>Breed: {cats[4].breed}</h5>
                  <h5>Age: {cats[4].age}</h5>
                  <h5>Sex: {cats[4].sex}</h5>
                  <h5>Size: {cats[4].size}</h5>
                  <h5>Contact: {cats[4].contact_email}</h5>
                  <p>{cats[4].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[5].photo} alt={cats[5].name}>
                  <h3>{cats[5].name}</h3>
                  <h5>Breed: {cats[5].breed}</h5>
                  <h5>Age: {cats[5].age}</h5>
                  <h5>Sex: {cats[5].sex}</h5>
                  <h5>Size: {cats[5].size}</h5>
                  <h5>Contact: {cats[5].contact_email}</h5>
                  <p>{cats[5].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </div>
        </Grid>
      )
    } else if (cats.length === 7) {
      return (
        <Grid>
          <div>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[0].photo} alt={cats[0].name}>
                  <h3>{cats[0].name}</h3>
                  <h5>Breed: {cats[0].breed}</h5>
                  <h5>Age: {cats[0].age}</h5>
                  <h5>Sex: {cats[0].sex}</h5>
                  <h5>Size: {cats[0].size}</h5>
                  <h5>Contact: {cats[0].contact_email}</h5>
                  <p>{cats[0].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[1].photo} alt={cats[1].name}>
                  <h3>{cats[1].name}</h3>
                  <h5>Breed: {cats[1].breed}</h5>
                  <h5>Age: {cats[1].age}</h5>
                  <h5>Sex: {cats[1].sex}</h5>
                  <h5>Size: {cats[1].size}</h5>
                  <h5>Contact: {cats[1].contact_email}</h5>
                  <p>{cats[1].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[2].photo} alt={cats[2].name}>
                  <h3>{cats[2].name}</h3>
                  <h5>Breed: {cats[2].breed}</h5>
                  <h5>Age: {cats[2].age}</h5>
                  <h5>Sex: {cats[2].sex}</h5>
                  <h5>Size: {cats[2].size}</h5>
                  <h5>Contact: {cats[2].contact_email}</h5>
                  <p>{cats[2].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[3].photo} alt={cats[3].name}>
                  <h3>{cats[3].name}</h3>
                  <h5>Breed: {cats[3].breed}</h5>
                  <h5>Age: {cats[3].age}</h5>
                  <h5>Sex: {cats[3].sex}</h5>
                  <h5>Size: {cats[3].size}</h5>
                  <h5>Contact: {cats[3].contact_email}</h5>
                  <p>{cats[3].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[4].photo} alt={cats[4].name}>
                  <h3>{cats[4].name}</h3>
                  <h5>Breed: {cats[4].breed}</h5>
                  <h5>Age: {cats[4].age}</h5>
                  <h5>Sex: {cats[4].sex}</h5>
                  <h5>Size: {cats[4].size}</h5>
                  <h5>Contact: {cats[4].contact_email}</h5>
                  <p>{cats[4].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[5].photo} alt={cats[5].name}>
                  <h3>{cats[5].name}</h3>
                  <h5>Breed: {cats[5].breed}</h5>
                  <h5>Age: {cats[5].age}</h5>
                  <h5>Sex: {cats[5].sex}</h5>
                  <h5>Size: {cats[5].size}</h5>
                  <h5>Contact: {cats[5].contact_email}</h5>
                  <p>{cats[5].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[6].photo} alt={cats[6].name}>
                  <h3>{cats[6].name}</h3>
                  <h5>Breed: {cats[6].breed}</h5>
                  <h5>Age: {cats[6].age}</h5>
                  <h5>Sex: {cats[6].sex}</h5>
                  <h5>Size: {cats[6].size}</h5>
                  <h5>Contact: {cats[6].contact_email}</h5>
                  <p>{cats[6].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </div>
        </Grid>
      )  
    } else if (cats.length === 8) {
      return (
        <Grid>
          <div>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[0].photo} alt={cats[0].name}>
                  <h3>{cats[0].name}</h3>
                  <h5>Breed: {cats[0].breed}</h5>
                  <h5>Age: {cats[0].age}</h5>
                  <h5>Sex: {cats[0].sex}</h5>
                  <h5>Size: {cats[0].size}</h5>
                  <h5>Contact: {cats[0].contact_email}</h5>
                  <p>{cats[0].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[1].photo} alt={cats[1].name}>
                  <h3>{cats[1].name}</h3>
                  <h5>Breed: {cats[1].breed}</h5>
                  <h5>Age: {cats[1].age}</h5>
                  <h5>Sex: {cats[1].sex}</h5>
                  <h5>Size: {cats[1].size}</h5>
                  <h5>Contact: {cats[1].contact_email}</h5>
                  <p>{cats[1].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[2].photo} alt={cats[2].name}>
                  <h3>{cats[2].name}</h3>
                  <h5>Breed: {cats[2].breed}</h5>
                  <h5>Age: {cats[2].age}</h5>
                  <h5>Sex: {cats[2].sex}</h5>
                  <h5>Size: {cats[2].size}</h5>
                  <h5>Contact: {cats[2].contact_email}</h5>
                  <p>{cats[2].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[3].photo} alt={cats[3].name}>
                  <h3>{cats[3].name}</h3>
                  <h5>Breed: {cats[3].breed}</h5>
                  <h5>Age: {cats[3].age}</h5>
                  <h5>Sex: {cats[3].sex}</h5>
                  <h5>Size: {cats[3].size}</h5>
                  <h5>Contact: {cats[3].contact_email}</h5>
                  <p>{cats[3].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[4].photo} alt={cats[4].name}>
                  <h3>{cats[4].name}</h3>
                  <h5>Breed: {cats[4].breed}</h5>
                  <h5>Age: {cats[4].age}</h5>
                  <h5>Sex: {cats[4].sex}</h5>
                  <h5>Size: {cats[4].size}</h5>
                  <h5>Contact: {cats[4].contact_email}</h5>
                  <p>{cats[4].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[5].photo} alt={cats[5].name}>
                  <h3>{cats[5].name}</h3>
                  <h5>Breed: {cats[5].breed}</h5>
                  <h5>Age: {cats[5].age}</h5>
                  <h5>Sex: {cats[5].sex}</h5>
                  <h5>Size: {cats[5].size}</h5>
                  <h5>Contact: {cats[5].contact_email}</h5>
                  <p>{cats[5].description}</p>
                </Thumbnail>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[6].photo} alt={cats[6].name}>
                  <h3>{cats[6].name}</h3>
                  <h5>Breed: {cats[6].breed}</h5>
                  <h5>Age: {cats[6].age}</h5>
                  <h5>Sex: {cats[6].sex}</h5>
                  <h5>Size: {cats[6].size}</h5>
                  <h5>Contact: {cats[6].contact_email}</h5>
                  <p>{cats[6].description}</p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail className="grid" src={cats[7].photo} alt={cats[7].name}>
                  <h3>{cats[7].name}</h3>
                  <h5>Breed: {cats[7].breed}</h5>
                  <h5>Age: {cats[7].age}</h5>
                  <h5>Sex: {cats[7].sex}</h5>
                  <h5>Size: {cats[7].size}</h5>
                  <h5>Contact: {cats[7].contact_email}</h5>
                  <p>{cats[7].description}</p>
                </Thumbnail>
              </Col>
            </Row>
          </div>
        </Grid>
      )
    }
  }

 
export default AdoptedcatsGridItem;