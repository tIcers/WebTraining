import './App.css';
import React from 'react';
import { Score } from './features/score/Score.js';
import { Board } from './features/board/Board.js';
import { useDispatch } from 'react-redux';
import { setBoard , flipCard, resetCards} from './boardSlice';


const App = () => {
  const startGameHandler = () => {
   const dispatch = useDispatch()
   dispatch(setBoard())
  };

  const tryAgainHandler = () => {
    const dispatch = useDispatch()
    dispatch(resetCards)
    
  };

  return (
    <div className="App">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        <button onClick={tryAgainHandler} className="try-new-pair-button">
          Try New Pair
        </button>
      </footer>
    </div>
  );
};

export default App;

