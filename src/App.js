import React, { useState, useEffect } from 'react';
import { Hangman } from './components';
import GuessDisplay from './components/GuessDisplay/GuessDisplay';
import WordDisplay from './components/WordDisplay/WordDisplay';
import WinScreen from './components/WinScreen/WinScreen';
import LoseScreen from './components/LoseScreen/LoseScreen';
import './App.css';

var wordList = require('an-array-of-english-words');

const App = () => {
  let [currentGuess, setCurrentGuess] = useState('');
  let [word, setWord] = useState('');
  let [incorrectLetters, setIncorrectLetters] = useState('');
  let [correctLetters, setCorrectLetters] = useState('');
  let [penalty, setPenalty] = useState(0);  

  let [hasWon, setHasWon] = useState(null);
  let [streak, setStreak] = useState(0);

  let remainingGuesses = 10 - (penalty + incorrectLetters.length);
  
  //const wordList = ['rhythm', 'aardvark', 'lenticular', 'display', 'hangman', 'ninja', 'turtle', 'dinosaur', 'alphabet'];  

  useEffect(() => {
    generateWord();
  }, []);

  function generateWord() {
    let ran = Math.floor(Math.random() * wordList.length);
    console.log('ran', ran, wordList.length);
    let word = wordList[ran];
    setWord(word);
    console.log('word', word);
  }

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
    generateWord();
    //setHasWon(false) comes from the WinState screen
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

    if (remainingGuesses === 0) {
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
            <span>Hangman Streak {streak}</span>
            <span className='pull-right'>{remainingGuesses}</span>
          </h1>
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
    <div className="App">
      <div className="container">
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;
