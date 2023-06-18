import React, { useState } from "react";
import styles from './Game.module.css'

const styles = {
  fontSize:48,
  margin:0
}
const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];

const choiceStyles = {
  display:'flex',
  alignItems:'center',
  marginButtom:'40px',
}

const emojiStyles = {
  size:'64px',
  marginRight:'20px'
}

const nameStyles = {
  margin:'0px',
  fontSize:'24px',
  color:'#ffff'
}

const resultStyles = {
  marginTop:'40px',
  fontSize:'48px',
  color:'#ffff'
}
function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);

  function handlePlayerChoice(choice) {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }

  function resetGame() {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
  }

  return (
    <div className={styles.container}>
      <h1 style={styles}>Rock Paper Scissors</h1>
     <div>
        {CHOICES.map((choice) => (
          <button
            className={styles.choices}
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && codeyChoice && (
        <div>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{playerChoice.emoji}</span>
            <p style={nameStyles}>You chose {playerChoice.name}</p>
          </div>
          <div style={nameStyles}>
            <span style={emojiStyles}>{codeyChoice.emoji}</span>
            <p style={nameStyles}>The computer chose {codeyChoice.name}</p>
          </div>
          <h2 style={resultStyles}>{result}</h2>
          <button onClick={resetGame}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default Game;

