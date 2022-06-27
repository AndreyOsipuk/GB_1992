import { FC, useEffect, useMemo, useState } from 'react';
import { Form } from 'components/Form';
import { MessageList } from 'components/MessagesList';
import { ChatList } from 'src/components/ChatList/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { WithClasses } from 'src/HOC/WithClasses';

import style from './ChatPage.module.css';
import { onValue } from 'firebase/database';
import { messagesRef } from 'src/services/firebase';

interface ChatPageProps {
  chats: any[];
  messagesDB: any;
}

export const ChatPage: FC<ChatPageProps> = ({ chats, messagesDB }) => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(MessageList);

  if (chatId && !messagesDB.find((chat: any) => chat?.name === chatId)) {
    console.log('redirect');
    return <Navigate to="/chats" replace />;
  }

  const messages = Object.entries(
    messagesDB.find((chat: any) => chat?.name === chatId).messageList
  ).map((message: any) => ({
    id: message[0],
    text: message[1].text,
    author: message[1].author,
  }));

  return (
    <>
      <ChatList chats={chats} messagesDB={messagesDB} />

      {/* <MessageList messages={chatId ? messages[chatId] : []} /> */}
      <MessageListWithClass
        messages={chatId ? messages : []}
        classes={style.border}
      />
      <Form />
    </>
  );
};
