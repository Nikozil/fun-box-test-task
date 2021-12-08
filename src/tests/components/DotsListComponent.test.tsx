import { render } from '@testing-library/react';
import React from 'react';
import { Dot } from '../../App';
import DotsListComponent from '../../components/DotsListComponent';

const dotsList = [
  { name: 'Dot 1' },
  { name: 'Dot 2' },
  { name: 'Dot 3' },
] as Dot[];
const deleteDot = jest.fn();
const permutationDots = jest.fn();

describe('DotsListComponent tests', () => {
  test('renders correct', () => {
    const { asFragment } = render(
      <DotsListComponent
        dotsList={dotsList}
        deleteDot={deleteDot}
        permutationDots={permutationDots}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
