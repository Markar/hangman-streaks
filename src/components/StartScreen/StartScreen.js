import React from 'react';
import { Router, navigate } from "@reach/router";
import './StartScreen.css';

const App = () => {
  
  function handlePlay() {
    navigate(`/game/`);   
  }

  return (    
    <>
        <h1>Hangman Streaks</h1>
        
        <div>Try new letters until you know the word, then answer with the full word to win!</div>
        <div>Guessing the wrong word will cost you a strike</div>
        <div>The number of strikes is displayed in the top right, and varies by difficulty</div>

        <button onClick={handlePlay}>Play</button>

    </>
  );
};

export default App;
