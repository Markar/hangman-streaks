import React, { useState, useEffect } from 'react';
import { Hangman } from '..';
import GuessDisplay from '../GuessDisplay/GuessDisplay';
import WordDisplay from '../WordDisplay/WordDisplay';
import WinScreen from '../WinScreen/WinScreen';
import LoseScreen from '../LoseScreen/LoseScreen';

import { generateWord } from '../../utils.js';
import './Game.css';

const StartScreen = () => {
  let [currentGuess, setCurrentGuess] = useState('');
  let [word, setWord] = useState('');
  let [incorrectLetters, setIncorrectLetters] = useState('');
  let [correctLetters, setCorrectLetters] = useState('');
  let [penalty, setPenalty] = useState(0);  

  let [hasWon, setHasWon] = useState(null);
  let [streak, setStreak] = useState(0);

  const attempts = 3; // inlcusive 
  let [remainingGuesses, setRemainingGuesses] = useState(3);

  useEffect(() => {
    generateWord(setWord);
  }, []);

  function handleGuessChange(e) {
    setCurrentGuess(e.target.value);
    console.log('guess', currentGuess);
  }

  function resetGame() {
    //Reset the state of the game, but maintain the streak    
    setCurrentGuess('');
    setIncorrectLetters('');
    setCorrectLetters('');
    setPenalty(0);
    generateWord(setWord);
    //setHasWon(false) comes from the WinState screen
  }

  function getAttempts() {
    return attempts - (penalty + incorrectLetters.length);
  }

  function handleSubmit(e) {    

    if (currentGuess.length > 1) {      
      if (word === currentGuess) {
        // Transition to Win State!      
        resetGame();
        setHasWon(true);              
        let newStreak = streak += 1;
        setStreak(newStreak);         
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
        setIncorrectLetters(incorrectLetters += currentGuess);        
      }
      setCurrentGuess('');
    }    

    let attempts = getAttempts();    
    setRemainingGuesses(attempts);    

    if (attempts === 0) {
      //Transition to Lose State after all of the other states have been resolved
      setHasWon(false);
      // Reset streak here, since we don't want to reset it on play again from the win screen
      setStreak(0);
    }    

    e.preventDefault();
  }  

  function renderScreen() {
    console.log('correct letters', correctLetters);
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
        />
      );
    } else {
      return (
        <>
          <h1>
            <span>Hangman Streak</span>            
          </h1>
          <div>
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
                What would you like to guess next?
            </div>
              <input minLength={1} maxLength={30} onChange={handleGuessChange}
                id="character-input" className="guess--input" value={currentGuess}
                autoComplete={"off"} />
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
