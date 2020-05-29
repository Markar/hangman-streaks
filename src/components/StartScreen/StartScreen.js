import React, {useState} from 'react';
import { navigate } from "@reach/router";
import './StartScreen.scss';

export default function StartScreen(props) {  

  const [difficulty, setDifficulty] = useState('Medium'); 
  const [language, setLanguage] = useState('English');

  function handlePlay() {
    navigate(`/game/${difficulty}/${language}`);
  }

  function handleLanguageClick(e) {
    let val = e.target.value || e.target.id;

    if (!val) {
      return;
    }

    setLanguage(val);
  }

  function handleDifficultyClick(e) {
    let val = e.target.value || e.target.id;

    if (!val) {
      return;
    }

    setDifficulty(val);
  }

  return (
    <>
      <div className='start-screen'>        
        <ul className='instructions-ul'>
          <li>
            Try new letters until you know the word
          </li>                    
          <li>
            Winning will add to your streak, and losing will erase it
          </li>          
          <li>
            Click at the top to reset the game
          </li>
          <li>
            Guess the right word to win!
          </li>          
        </ul>

        <div>
          <button className='english hangman-btn' value={'English'} onClick={handleLanguageClick}>English</button>
          <button className='italian hangman-btn' value={'Italian'} onClick={handleLanguageClick}>Italian</button>
        </div>

        <div>
          <button className='easy hangman-btn' value={'Easy'} onClick={handleDifficultyClick}>Easy</button>
          <button className='medium hangman-btn' value={'Medium'} onClick={handleDifficultyClick}>Medium</button>
          <button className='hard hangman-btn' value={'Hard'} onClick={handleDifficultyClick}>Hard</button>
          <button className='everything hangman-btn' value={'Everything'} onClick={handleDifficultyClick}>
            <span className='rainbow' id={'Everything'}>Everything!</span>
          </button>
        </div>
        
        <div className='difficulty-label'>
          {difficulty} {language}
        </div>

        <button className='hangman-btn start' onClick={handlePlay}>Play</button>

      </div>
    </>
  );
};
