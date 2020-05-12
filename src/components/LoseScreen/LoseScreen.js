import React from 'react';
import './LoseScreen.scss';

export default function LoseScreen(props) {  

  function handlePlayClick(e) {
    props.setHasWon(null);    
  }  

  function getText(streak) {         
    let txt = `You were on a ${streak} win streak!`;        

    if (streak === 0) {
      txt = `You were not on a winning streak yet.`
    }
    if (streak === 1) {
      txt = `You had just started your winning streak!`;      
    }
    if (streak >= 2) {
      txt = `You were on a ${streak} win streak, good job!`;      
    }
    if (streak >= 5) {
      txt = `You were on a ${streak} win streak, great job!`;      
    }
    if (streak >= 7) {
      txt = `You were on a ${streak} win streak, amazing!!`;      
    }
    if (streak >= 10) {
      txt = `You were on a ${streak} win streak, incredible! keep going!`;      
    }
    if (streak >= 13) {
      txt = `You were on a ${streak} win streak, FANTASTIC!!`;      
    }    
    if (streak >= 15) {
      txt = `You were on a ${streak} win streak!!`;      
      txt = txt.toUpperCase();
    }        

    return txt;    
  }
  
  return (
    <>
      <div className='lose--screen'>
        <h1 className=''>
          <div>You lost :(</div>
        </h1>

        <div>
          {getText(props.streak)}
        </div>
        <div className='losing-word'>          
          The word was <b>{props.word}</b>
        </div>

        <div>
          <button onClick={handlePlayClick} className='play--button'>
            Play Again?
        </button>
        </div>
      </div>
    </>
  );
};
