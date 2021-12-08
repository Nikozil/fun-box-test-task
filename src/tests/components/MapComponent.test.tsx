import { render } from '@testing-library/react';
import React from 'react';
import { Dot } from '../../App';
import MapComponent from '../../components/MapComponent';

const dotsList = [
  { name: 'Dot 1', id: '213', coordinates: [10, 20] },
  { name: 'Dot 2', id: '213243', coordinates: [15, 20] },
  { name: 'Dot 3', id: '212343', coordinates: [17, 20] },
] as Dot[];
const setDotsList = jest.fn();
const setCenter = jest.fn();

describe('MapComponent tests', () => {
  test('renders correct', () => {
    const { asFragment } = render(
      <MapComponent
        center={[10, 20]}
        setCenter={setCenter}
        dotsList={dotsList}
        setDotsList={setDotsList}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
