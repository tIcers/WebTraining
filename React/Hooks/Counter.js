import React, { useState , useEffect} from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };

  useEffect(() => {
    alert(`Count: ${count}`)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
