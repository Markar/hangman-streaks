import React from 'react';
import './LoseScreen.scss';

export default function LoseScreen(props) {  

  function handlePlayClick(e) {
    props.setHasWon(null);    
  }  

  return (
    <>
      <div className='lose--screen'>
        <h1 className=''>
          <div>You lost :(</div>
        </h1>

        <div>
          <button onClick={handlePlayClick} className='play--button'>
            Play Again?
        </button>
        </div>
      </div>
    </>
  );
};
