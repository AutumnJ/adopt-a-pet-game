import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import IMG_5695LG from '../lib/IMG_5695LG.jpg'

export const CatsPageError = () => {
  return (
    <div>
      <div className="cats-header">
        <h2><small className="text-muted">Oops! Maybe all the kitties got homes.</small></h2>
        <h4>Navigate to the <Link to={'/'}>homepage</Link> to adopt again!</h4>
      </div>
      <div style={{"paddingTop" : "10px"}}>
        <Image src={IMG_5695LG} alt="sad kitty" rounded/> 
      </div>
    </div>
  )
}

// <Image src="https://autumnj.github.io//assets/images/IMG_5193.JPG" alt="sad kitty" rounded/> 
