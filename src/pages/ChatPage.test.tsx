import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { ChatPage } from './ChatPage';

import { Authors, Messages } from 'src/common-types';
import { renderWithRouter } from 'src/utils/renderWithRouter';

describe('ChatPage', () => {
  let messages: Messages;
  let onAddChat: jest.Mock;
  let onAddMessage: jest.Mock;

  beforeEach(() => {
    onAddChat = jest.fn();
    onAddMessage = jest.fn();
    messages = {
      default: [
        {
          author: Authors.USER,
          text: '1',
        },
        {
          author: Authors.USER,
          text: '2',
        },
      ],
    };

    renderWithRouter({
      element: (
        <ChatPage
          chats={[{ id: '1', name: 'default' }]}
          onAddChat={onAddChat}
          messages={messages}
          onAddMessage={onAddMessage}
        />
      ),
      pathForRoute: 'chats/:chatId',
      url: '/chats/default',
    });
  });
  it('default messages length to be 2', () => {
    expect(screen.queryAllByTestId<HTMLLIElement>('li').length).toBe(2);
  });

  it('send message', async () => {
    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, World!');

    const button = screen.getByTestId<HTMLButtonElement>('button');
    await userEvent.click(button);

    expect(onAddMessage).toHaveBeenCalledTimes(1);
  });

  it('bot answer', async () => {
    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, World!');

    const button = screen.getByTestId<HTMLButtonElement>('button');
    await userEvent.click(button);

    await waitFor(() => expect(onAddMessage).toHaveBeenCalledTimes(2), {
      timeout: 1500,
    });
  });
});
