import React from 'react';
import { useSelector } from 'react-redux';
import { selectMachedIDs } from './boardSlice';

export const Score = () => {
 const cardsMatched = useSelector(selectMachedIDs) 

  return (
    <div className="score-container">Matched: {cardsMatched.length}</div>
  );
};
