import { useState, useEffect, useCallback, useRef } from 'react';
import { Child } from './Child';

export const Form = () => {
  const [count, setCount] = useState(0);
  const [name] = useState('gb');
  const [show, setShow] = useState(true);

  const myRef = useRef();

  useEffect(() => {
    console.log('Parent did mount');
    console.log(myRef);
  }, []);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  console.log(1);
  const handleShow = useCallback(() => {
    setShow(!show);
  }, []);

  // const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  return (
    <>
      <p>Parent component</p>
      <div ref={myRef}>{count}</div>
      <button onClick={handleClick}>click</button>
      <br />
      <button onClick={handleShow}>show</button>
      <hr />
      {show && <Child name={name} handleClick={handleClick} />}
    </>
  );
};
