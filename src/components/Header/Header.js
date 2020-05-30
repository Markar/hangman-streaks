import React from 'react';
import { navigate } from "@reach/router";
import './Header.scss';

export function Header() {  

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
