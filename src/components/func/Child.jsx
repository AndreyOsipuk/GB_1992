import { memo, useEffect, useState } from 'react';

export const Child = memo(
  () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };

    console.log('child updated');

    useEffect(() => {
      console.log('Child did mount');
      // const interval = setInterval(() => {
      //   console.log(1);
      // }, 1000);

      return () => {
        // clearInterval(interval);
      };
    }, []);

    useEffect(() => {
      console.log('Count updated');
    }, [count]);

    return (
      <>
        <p>Child component</p>
        <p>{count}</p>
        <button onClick={handleClick}>click</button>
      </>
    );
  }
  // (prevProps, nextProps) => {
  //   return prevProps.name !== nextProps.name;
  // }
);
