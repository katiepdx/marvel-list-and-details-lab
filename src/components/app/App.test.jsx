import '@babel/polyfill'
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', async() => {
    const { asFragment } = render(<App />);
    
    await waitFor(() => {
      expect(asFragment()).toEqual(expect.any(DocumentFragment));
    })
  });
});
