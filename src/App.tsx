import { FC } from 'react';
import { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { MessageList } from './components/MessagesList';
import { AUTHOR } from './constants';
import { Message } from './common-types';

export const App: FC = () => {
  const [messages, setMesseges] = useState<Message[]>([]);

  const addMessage = (newMessage: Message) => {
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
      }, 1500);

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
