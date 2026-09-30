import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatePicker } from '../../src/components/DatePicker/DatePicker';

describe('DatePicker', () => {
  it('renders input', () => {
    render(<DatePicker />);
    expect(screen.getByPlaceholderText('Select date')).toBeInTheDocument();
  });

  it('opens calendar on click', async () => {
    const user = userEvent.setup();
    render(<DatePicker />);

    await user.click(screen.getByPlaceholderText('Select date'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('selects a date', async () => {
    const user = userEvent.setup();
    render(<DatePicker />);

    await user.click(screen.getByPlaceholderText('Select date'));
    await user.click(screen.getByText('4'));

    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    expect(screen.getByDisplayValue(`${y}-${m}-04`)).toBeInTheDocument();
  });
});