import React from 'react';
import './GuessDisplay.scss';

export function GuessDisplay(props) {    
  
  return (     
    <>
      <div className='guess--display'>
        <label className='wrong--letters'>
          {props.letters || ''}
        </label>        
      </div>        
    </>   
    
  );
};
