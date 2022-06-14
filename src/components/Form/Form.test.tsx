import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Form } from './Form';
import { waitFor } from '@storybook/testing-library';

describe('Form', () => {
  it('render component', () => {
    const addMessage = jest.fn();
    render(<Form addMessage={addMessage} />);
  });

  it('input change with fireevent', () => {
    const addMessage = jest.fn();
    render(<Form addMessage={addMessage} />);

    const input = screen.getByTestId<HTMLInputElement>('input');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
  });

  it('input change with userEvent', async () => {
    const addMessage = jest.fn();
    render(<Form addMessage={addMessage} />);

    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, World!');
    expect(input.value).toBe('Hello, World!');
  });

  it('button click with fireEvent', async () => {
    const addMessage = jest.fn();
    render(<Form addMessage={addMessage} />);

    const input = screen.getByTestId<HTMLInputElement>('input');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');

    const button = screen.getByTestId<HTMLButtonElement>('button');
    fireEvent.click(button);
    expect(addMessage).toHaveBeenCalledTimes(1);
  });

  it('button click with useEvent', async () => {
    const addMessage = jest.fn();
    render(<Form addMessage={addMessage} />);

    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, World!');
    expect(input.value).toBe('Hello, World!');

    const button = screen.getByTestId<HTMLButtonElement>('button');
    await userEvent.click(button);
    expect(addMessage).toHaveBeenCalledTimes(1);
  });
});
