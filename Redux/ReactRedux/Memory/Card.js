import React from 'react';
let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { flipCard, selectVisibleIDs } from './boardSlice';

export const Card = ({ id, contents }) => {
  const visibleIDs = useSelector(selectVisibleIDs)
  
  const flipHandler = (id) => {
    const dispatch = useDispatch()
    dispatch(flipCard(id))
    
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (false) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => {};
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};

