import { useState } from 'react';
import { AUTHOR } from '../../constants';
import { Button } from './components/Button';

export const Form = ({ addMessage }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage({
      author: AUTHOR.user,
      text,
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button label="send" />
    </form>
  );
};
