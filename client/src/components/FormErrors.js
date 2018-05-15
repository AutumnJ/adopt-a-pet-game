import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}><i>{formErrors[fieldName]}</i></p>
        )        
      } else {
        return '';
      }
    })}
  </div>

  // add {fieldName} to <p> if there are multiple fields being validated