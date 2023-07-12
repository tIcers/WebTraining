import React from 'react';

function Button(props) {
  return (
    <button onClick = {props.onClick} >
      Click me!
    </button>
  );
}

export default Button;

// setting default value
import React from 'react';
  
function Button(props) {

  const {text = 'Default Text of Big Button'} = props;
  return <button>{text}</button>
 }

export default Button;
