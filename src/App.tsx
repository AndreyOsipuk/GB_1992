import { Suspense } from 'react';
import { nanoid } from 'nanoid';
import { FC, useMemo, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat, Message, Messages } from './common-types';
import { ChatList } from './components/ChatList/ChatList';
import { Header } from './components/Header';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store';

// const Profile = React.lazy(() =>
//   Promise.all([
//     import('./pages/Profile').then(({ Profile }) => ({
//       default: Profile,
//     })),
//     new Promise((resolve) => setTimeout(resolve, 1000)),
//   ]).then(([moduleExports]) => moduleExports)
// );

const defaultMessages: Messages = {
  default: [],
};

export const App: FC = () => {
  const [messages, setMesseges] = useState(defaultMessages);
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const chats = useMemo(
    () =>
      Object.keys(messages).map((chat) => ({
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
    setMesseges((prevMessages) => ({
      ...prevMessages,
      [chatId]: [...prevMessages[chatId], newMessage],
    }));
  };

  const onDeleteChat = (name: string) => {
    const newMessages = { ...messages };
    delete newMessages[name];
    setMesseges(newMessages);
  };

  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeContext.Provider
          value={{
            theme,
            toggleTheme,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<Main />} />
                <Route path="profile" element={<Profile />} />
                <Route path="chats">
                  <Route
                    index
                    element={
                      <ChatList
                        chats={chats}
                        onAddChat={onAddChat}
                        onDeleteChat={onDeleteChat}
                      />
                    }
                  />
                  <Route
                    path=":chatId"
                    element={
                      <ChatPage
                        chats={chats}
                        onAddChat={onAddChat}
                        messages={messages}
                        onAddMessage={onAddMessage}
                        onDeleteChat={onDeleteChat}
                      />
                    }
                  />
                </Route>
              </Route>

              <Route path="*" element={<h2>404 page</h2>} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Suspense>
    </Provider>
  );
};
