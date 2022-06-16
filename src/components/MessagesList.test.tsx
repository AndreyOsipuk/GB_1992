import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MessageList } from './MessagesList';
import { Authors, Message } from 'src/common-types';

describe('MessagesList', () => {
  it('render component', () => {
    render(<MessageList messages={[]} />);
  });

  it('messages list is empty', async () => {
    render(<MessageList messages={[]} />);

    expect(screen.queryAllByRole<HTMLLIElement>('li').length).toBe(0);
  });

  it('messages list length is 2', async () => {
    const messages: Message[] = [
      {
        author: Authors.USER,
        text: '1',
      },
      {
        author: Authors.USER,
        text: '2',
      },
    ];
    render(<MessageList messages={messages} />);

    expect(screen.getAllByTestId<HTMLLIElement>('li')[0].innerHTML).toBe(
      'USER: 1'
    );
    expect(screen.getAllByTestId<HTMLLIElement>('li').length).toBe(2);
  });
});
