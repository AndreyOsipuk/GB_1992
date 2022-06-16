import { Suspense } from 'react';
import { FC, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChatList } from './components/ChatList/ChatList';
import { Header } from './components/Header';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { AboutWithConnect } from './pages/About';
import { PersistGate } from 'redux-persist/integration/react';

// const Profile = React.lazy(() =>
//   Promise.all([
//     import('./pages/Profile').then(({ Profile }) => ({
//       default: Profile,
//     })),
//     new Promise((resolve) => setTimeout(resolve, 1000)),
//   ]).then(([moduleExports]) => moduleExports)
// );

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
                  <Route path="about" element={<AboutWithConnect />} />
                  <Route path="chats">
                    <Route index element={<ChatList />} />
                    <Route path=":chatId" element={<ChatPage />} />
                  </Route>
                </Route>

                <Route path="*" element={<h2>404 page</h2>} />
              </Routes>
            </BrowserRouter>
          </ThemeContext.Provider>
        </Suspense>
      </PersistGate>
    </Provider>
  );
};
