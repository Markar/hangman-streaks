import React from 'react';
import './WordDisplay.scss';

export function WordDisplay(props) {        
  let renderWord = '';
  let { letters, word } = props;
  //letters a
  //word aardvark
  // a a _ _ _ a _ K 
  for (let i = 0; i < word.length; i++) {
    if (letters.includes(word[i])) {
      renderWord += word[i] + ' ';
    } else {
      renderWord += '_ ';
    }
  }

  return (         
    <>
      <div className='word--display'>
        <span className='correct--letters'>
          {renderWord}
        </span>        
      </div>        
    </>   
  );
};
