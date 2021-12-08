import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App tests', () => {
  test('renders  react correct', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
