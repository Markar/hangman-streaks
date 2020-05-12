import React from 'react';
import { Router } from "@reach/router";
import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import './App.scss';

const App = () => {    

  return (    
    <div className="App">
      <div className="container">        
      <Header />
        <Router>          
          <StartScreen path="/" />
          <Game path="/game/:difficulty"/>
        </Router>
      </div>
    </div>
  );
};

export default App;
