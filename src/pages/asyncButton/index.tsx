import React, { SyntheticEvent, useState } from 'react';
import { useAsyncButton } from './hooks';

const AsyncButton = () => {
  const [ value, setValue ] = useState(0)
  const { count, incrementCount } = useAsyncButton();

  const handleClick = () => {
    incrementCount(value);
  }

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setValue(+value)
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <input value={value} type='number' onChange={handleChange}/>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default AsyncButton;
