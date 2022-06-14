import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { App } from './App';
import { waitFor } from '@storybook/testing-library';

describe('App', () => {
  it('render component', () => {
    render(<App />);
  });

  it('send user message', async () => {
    render(<App />);

    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, World!');

    const button = screen.getByTestId<HTMLButtonElement>('button');
    await userEvent.click(button);

    expect(screen.getAllByTestId<HTMLLIElement>('li').length).toBe(1);
  });

  it('bot answer', async () => {
    render(<App />);

    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, World!');

    const button = screen.getByTestId<HTMLButtonElement>('button');
    await userEvent.click(button);

    //Вариант 1
    expect(
      await screen.findByText(/Im BOT/, undefined, { timeout: 1500 })
    ).toBeInTheDocument();

    //Вариант 2
    await waitFor(
      () => expect(screen.getByText(/Im BOT/)).toBeInTheDocument(),
      {
        timeout: 1500,
      }
    );
  });
});
