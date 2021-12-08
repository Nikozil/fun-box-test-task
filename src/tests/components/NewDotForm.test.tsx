import React from 'react';

import userEvent from '@testing-library/user-event';
import NewDotForm from '../../components/NewDotForm';
import { render, screen, waitFor } from '@testing-library/react';

const handleSubmit = jest.fn();

describe('NewDotForm tests', () => {
  it('rendering and submitting', async () => {
    render(<NewDotForm handleSubmit={handleSubmit} />);
    userEvent.type(
      screen.getByPlaceholderText(/Новая метка/i),
      'New Dot{enter}'
    );

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();

      expect(handleSubmit).toHaveBeenCalledWith('New Dot');
      expect(screen.queryByDisplayValue(/New Dot/i)).not.toBeInTheDocument();
    });
  });
});
