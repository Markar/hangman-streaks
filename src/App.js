import React, { useState } from 'react';
import { Hangman } from './components';
import GuessDisplay from './components/GuessDisplay/GuessDisplay';

import './App.css';

const App = () => {
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [word, setWord] = useState('hangman');

  const [guessedLetters, setGuessedLetters] = useState('h');

  function handleGuessChange(e) {
    setCurrentGuess(e.target.value);
  }

  function handleSubmit(e) {

    if (word === currentGuess) {
      // Transition to Win State!
      console.log('You win!');
      return true;
    }

    if (word.includes(currentGuess)) {
      //handle guessing the correct letter
    } else {
      setGuessedLetters(guessedLetters += currentGuess);
      console.log('guessed', guessedLetters);
    }

  }
  
  return (
    <div className="App">
      <div className="container">
        <h1>React Hangman</h1>
        <Hangman incorrectGuessCount={incorrectGuesses}></Hangman>        

        <form>
          <label>
            Guess:            
            <input minLength={1} maxLength={30} onChange={handleGuessChange} 
                 id="character-input" className="hangman--input" value={currentGuess} />
          </label>          

          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>

        <GuessDisplay letters={guessedLetters}/>

      </div>
    </div>
  );
};

export default App;
