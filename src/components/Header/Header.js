import React from 'react';
import { navigate } from "@reach/router";
import './Header.scss';

const App = () => {  

  function handleClick() {
    navigate(`/`);
  }
  
  return (
    <>
      <div className='hangman--header rainbow'>
        <h1 onClick={handleClick}>Hangman Streaks</h1>
      </div>
    </>
  );
};

export default App;
