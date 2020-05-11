import React from 'react';
import './WinScreen.css';

export default function WinScreen(props) {  

  function handlePlayClick(e) {
    props.setHasWon(false);    
  }

  function renderStreak() {
    if (props.streak < 1) {
      return '';
    }

    return (
      <>
        <div>
          You're on a winning steak!
      </div>
        <div>
          {props.streak}
        </div>
      </>
    );
  }

  return (
    <>
      <div className='win--screen'>
        <h1 className=''>
          <div>You won!</div>
        </h1>

        {renderStreak()}

        <div>
          <button onClick={handlePlayClick} className='play--button'>
            Play Again?
        </button>
        </div>
      </div>
    </>
  );
};
