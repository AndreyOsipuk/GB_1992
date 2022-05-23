import { useState } from 'react';

import style from './Form.module.css'

export const Form = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('gb');

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <p className={style.background}>hello, {count}</p>
      <button onClick={handleClick}>click</button>
      <p style={{ backgroundColor: 'green' }}>Name: {props.name}</p>
      <input type="text" onChange={handleChange} value={name}/>
    </>
  );
};
