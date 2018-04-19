import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import IMG_5695LG from '../lib/IMG_5695LG.jpg'
import BigPup from '../lib/BigPup.jpg'

export const PetErrorPage = ({ pet }) => {

  const photo = ( pet === "cat" ? IMG_5695LG : BigPup )
  const title = ( pet === "cat" ? "kitties" : "puppies" )

  return (
    <div>
      <div className="cats-header">
        <h2><small className="text-muted">Oops! Maybe all the { title } got homes.</small></h2>
        <h4>Navigate to the <Link to={'/'}>homepage</Link> to adopt again!</h4>
      </div>
      <div style={{"paddingTop" : "10px"}}>
        <Image src={photo} alt="sad kitty" rounded/> 
      </div>
    </div>
  )
}

// <Image src="https://autumnj.github.io//assets/images/IMG_5193.JPG" alt="sad kitty" rounded/> 
