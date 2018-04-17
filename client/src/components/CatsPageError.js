import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import IMG_5695LG from '../IMG_5695LG.jpg'

export const CatsPageError = () => {
  return (
    <div> 
      <p>Oops! Maybe all the kitties got homes. Navigate to the <Link to={'/'}>homepage</Link> to adopt again!</p>
      <Image src={IMG_5695LG} alt="sad kitty" rounded/> 
    </div>
  )
}

// <Image src="https://autumnj.github.io//assets/images/IMG_5193.JPG" alt="sad kitty" rounded/> 
