import React from 'react';
import './WinScreen.css';

export default function WinScreen(props) {  

  function handlePlayClick(e) {
    props.setHasWon(null);    
  }

  function renderStreak() {
    const { streak } = props;
    console.log('streaks', streak);
    if (streak < 1) {
      return '';
    }

    let styleObj = {
      fontSize: 10 + 3*streak
    };

    return (
      <>        
        <div className='streak--description rainbow' style={styleObj}>
          You have won {streak} games in a row so far!
        </div>
      </>
    );
  }

  return (
    <>
      <div className='win--screen'>
        <h1 className=''>
          <div>You win!</div>
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
