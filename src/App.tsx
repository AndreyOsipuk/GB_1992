import { nanoid } from 'nanoid';
import { FC, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat, Message, Messages } from './common-types';
import { ChatList } from './components/ChatList/ChatList';
import { Header } from './components/Header';
import { ChatPage } from './pages/ChatPage';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';

const defaultChats: Chat[] = [
  {
    id: '1',
    name: 'default',
  },
];

const defaultMessages: Messages = {
  default: [],
};

export const App: FC = () => {
  const [messages, setMesseges] = useState(defaultMessages);

  const chats = useMemo(
    () =>
      Object.keys(messages).map((chat) => ({
        // ['default'] --> [{id: 123123, name: 'default'}]
        id: nanoid(),
        name: chat,
      })),
    [Object.keys(messages).length]
  );

  const onAddChat = (newChat: Chat) => {
    setMesseges({
      ...messages,
      [newChat.name]: [],
    });
  };

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMesseges({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route
              index
              element={<ChatList chats={chats} onAddChat={onAddChat} />}
            />
            <Route
              path=":chatId"
              element={
                <ChatPage
                  chats={chats}
                  onAddChat={onAddChat}
                  messages={messages}
                  onAddMessage={onAddMessage}
                />
              }
            />
          </Route>
        </Route>

        <Route path="*" element={<h2>404 page</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
