import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DotComponent from '../../components/DotComponent';
import { Dot } from '../../App';
import userEvent from '@testing-library/user-event';

const dot = { name: 'Dot 1', id: '23432432' } as Dot;
const deleteDot = jest.fn();

describe('DotComponent tests', () => {
  test('render and click delete', async () => {
    render(<DotComponent dot={dot} deleteDot={deleteDot} />);
    userEvent.click(screen.getByTestId('delete-button'));
    await waitFor(() => {
      expect(deleteDot).toHaveBeenCalled();

      expect(deleteDot).toHaveBeenCalledWith(dot.id);
    });
  });
});
