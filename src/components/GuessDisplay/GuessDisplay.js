import React from 'react';
import './GuessDisplay.css';

export default function GuessDisplay(props) {    
  
  return (     
    <>
      <div>
        <label classname='guess--display'>
          {props.letters || ''}
        </label>        
      </div>        
    </>   
    
  );
};
