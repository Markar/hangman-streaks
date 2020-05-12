import React, {useState} from 'react';
import { navigate } from "@reach/router";
import './StartScreen.scss';

const App = () => {

  const [difficulty, setDifficulty] = useState('Medium'); 

  function handlePlay() {
    navigate(`/game/${difficulty}`);
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
        <ul>
          <li>
            Try new letters until you know the word
          </li>
          <li>
            Guessing the wrong word will cost you a strike
          </li>
          <li>
            The number of strikes is displayed in the top right
          </li>
          <li>
            Winning will add to your streak
          </li>
          <li>
            Losing will erase your streak
          </li>
          <li>
            Clicking on the header will reset the game
          </li>
          <li>
            Guess the right word to win!
          </li>          
        </ul>

        <div>
          <button className='easy hangman-btn' value={'Easy'} onClick={handleDifficultyClick}>Easy</button>
          <button className='medium hangman-btn' value={'Medium'} onClick={handleDifficultyClick}>Medium</button>
          <button className='hard hangman-btn' value={'Hard'} onClick={handleDifficultyClick}>Hard</button>
          <button className='everything hangman-btn' value={'Everything'} onClick={handleDifficultyClick}>
            <span className='rainbow' id={'Everything'}>Everything!</span>
          </button>
        </div>
        
        <div className='difficulty-label'>
          Difficulty: {difficulty}
        </div>

        <button className='hangman-btn start' onClick={handlePlay}>Play</button>

      </div>
    </>
  );
};

export default App;
