import { Form } from './components/classes/Form';
import { Form as FormFunc } from './components/func/Form';
import { useState } from 'react';

export const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      <hr />
      <h3>{toggle ? 'func components' : 'class components'}</h3>
      {!toggle && <Form />}
      {toggle && <FormFunc />}
    </>
  );
};
