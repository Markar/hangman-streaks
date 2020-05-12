import React from 'react';
import { navigate } from "@reach/router";
import './Header.css';

const App = () => {  

  function handleClick() {
    navigate(`/`);
  }
  
  return (
    <>
      <div className='hangman--header'>
        <h1 onClick={handleClick}>Hangman Streaks</h1>
      </div>
    </>
  );
};

export default App;
