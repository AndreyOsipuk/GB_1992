import { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { MessageList } from './components/MessagesList';
import { AUTHOR } from './constants';

export const App = () => {
  const [messages, setMesseges] = useState([]);

  const addMessage = (newMessage) => {
    setMesseges([...messages, newMessage]);
  };

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author === AUTHOR.user
    ) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'Im BOT',
        });
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  return (
    <>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};
