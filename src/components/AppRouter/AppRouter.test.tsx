import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AppRouter } from './AppRouter';

import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from 'src/store';
import { configureStore } from '@reduxjs/toolkit';

describe('App', () => {
  it('wrong url', () => {
    // render(
    //   <MemoryRouter initialEntries={['/wrong_url']}>
    //     <AppRouter />
    //   </MemoryRouter>
    // );
    // screen.getByText('404 page');
  });
});
