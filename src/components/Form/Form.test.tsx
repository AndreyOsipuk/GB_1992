import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Form } from './Form';
import { waitFor } from '@storybook/testing-library';
import { rootReducer } from 'src/store';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

describe('Form', () => {
  let store: any;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  it('render component', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });

  it('input change with fireevent', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const input = screen.getByTestId<HTMLInputElement>('input');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
  });

  it('input change with userEvent', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, World!');
    expect(input.value).toBe('Hello, World!');
  });
});
