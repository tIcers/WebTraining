import React, { useEffect, useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);

  const [ name , setName ]  = useState('')
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(preTime => preTime + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const handleChange = ({target}) => {
    setName(target.value)
  }

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type='text'/>
    </>
  );
}
