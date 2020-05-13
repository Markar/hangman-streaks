import React from 'react';
import './WinScreen.scss';

export default function WinScreen(props) {  

  function handlePlayClick(e) {
    props.setHasWon(null);    
  }

  function renderStreak() {
    const { streak } = props;    
    if (streak < 1) {
      return '';
    }

    let size = 16;
    size += 8*streak;
    if (size > 60) 
      size = 60;

    let styleObj = {
      fontSize: size
    };

    let winText = `You have won ${streak} games in a row so far!`;
    if (streak === 1) {
      winText = 'You have started a new winning streak!';
    }

    return (
      <>        
        <div className='streak--description rainbow' style={styleObj}>
          {winText}
        </div>
      </>
    );
  }

  return (
    <>
      <div className='win--screen'>
        <h1 className='win-main-text'>
          <div>You win!</div>
        </h1>

        {renderStreak()}

        <div>
          <button onClick={handlePlayClick} autoFocus className='play--button'>
            Play Again?
        </button>
        </div>
      </div>
    </>
  );
};
