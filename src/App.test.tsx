import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { App } from './App';

import { MemoryRouter, Router } from 'react-router-dom';

describe('App', () => {
  it('wrong url', () => {
    render(
      <MemoryRouter initialEntries={['/wrong_url']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('404 page');
  });
});
