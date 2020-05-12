import React from 'react';
import { Router } from "@reach/router";
import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import './App.css';

const App = () => {    

  return (    
    <div className="App">
      <div className="container">        
        <Router>          
          <StartScreen path="/" />
          <Game path="/game/:difficulty"/>
        </Router>
      </div>
    </div>
  );
};

export default App;
