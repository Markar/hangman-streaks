import React, { useState, useEffect } from 'react';
import { Hangman } from '..';
import GuessDisplay from '../GuessDisplay/GuessDisplay';
import WordDisplay from '../WordDisplay/WordDisplay';
import WinScreen from '../WinScreen/WinScreen';
import LoseScreen from '../LoseScreen/LoseScreen';

import { generateWord } from '../../utils.js';
import './Game.scss';

const StartScreen = (props) => {
  let [currentGuess, setCurrentGuess] = useState('');
  let [word, setWord] = useState('');
  let [incorrectLetters, setIncorrectLetters] = useState('');
  let [correctLetters, setCorrectLetters] = useState('');
  let [penalty, setPenalty] = useState(0);  

  let [hasWon, setHasWon] = useState(null); //null to start over, false for loss screen, true for win screen
  let [streak, setStreak] = useState(0);  
  let [losingWord, setLosingWord] = useState('');

  const attempts = 10;
  let [remainingGuesses, setRemainingGuesses] = useState(attempts);

  useEffect(() => {
    generateWord(setWord, props.difficulty, props.language);
  }, []);

  function handleGuessChange(e) {
    setCurrentGuess(e.target.value);    
  }

  function resetGame() {
    //Reset the state of the game, but maintain the streak    
    setCurrentGuess('');
    setIncorrectLetters('');
    setCorrectLetters('');
    setPenalty(0);
    setRemainingGuesses(attempts);
    generateWord(setWord, props.difficulty, props.language);    
    //setHasWon(false) comes from the WinState screen
  }

  function getAttempts() {
    return attempts - (penalty + incorrectLetters.length);
  }

  function handleSubmit(e) {    
    currentGuess = currentGuess.toLowerCase();

    if (currentGuess.length > 1) {      
      if (word === currentGuess) {
        // Transition to Win State!      
        resetGame();
        setHasWon(true);              
        let newStreak = streak += 1;
        setStreak(newStreak);         
        e.preventDefault();
        return;
      } else {
        // No letters added, and add a penalty
        let newPenalty = penalty += 1; 
        setPenalty(newPenalty);                
        setCurrentGuess('');
      }
    } else {
      if (word.includes(currentGuess)) {
        let correct = correctLetters += currentGuess;
        setCorrectLetters(correct);        
      } else {
        if (incorrectLetters.indexOf(currentGuess) === -1) {
          setIncorrectLetters(incorrectLetters += currentGuess);        
        }        
      }
      setCurrentGuess('');
    }    

    let attempts = getAttempts();        
    setRemainingGuesses(attempts);    

    if (attempts === 0) {
      //Transition to Lose State after all of the other states have been resolved      
      setHasWon(false);
      setLosingWord(word);
      resetGame();
      // Reset streak here, since we don't want to reset it on play again from the win screen
      setStreak(0);
    }    

    e.preventDefault();
  }  

  function renderScreen() {    
    if (hasWon) {
      return (
        <WinScreen 
          setHasWon={setHasWon}
          streak={streak}
        />
      );
    } 
    
    if (hasWon === false) {
      return (
        <LoseScreen 
          setHasWon={setHasWon}
          streak={streak}
          word={losingWord}
        />
      );
    } else {
      return (
        <>
          <div className='game--info'>
            {streak} wins
            <span className='pull-right'>{remainingGuesses} tries left</span>
          </div>
          <Hangman incorrectGuessCount={penalty + incorrectLetters.length}></Hangman>

          <WordDisplay
            letters={correctLetters}
            word={word}
          />

          <GuessDisplay
            letters={incorrectLetters}
          />

          <form onSubmit={handleSubmit} className='guess--form'>
            <label>
              <div className='guess--text'>
                What letter or word would you like to guess next?
            </div>
              <input minLength={1} maxLength={50} onChange={handleGuessChange}
                id="character-input" className="guess--input" value={currentGuess}
                autoComplete={"off"} autoFocus ref={input => input && input.focus()} />
            </label>

            <div>
              <input type="submit" value="Guess" className='guess--submit' />
            </div>

          </form>
        </>
      );
    }
  }

  return (    
    <>
      {renderScreen()}
    </>
  );
};

export default StartScreen;
