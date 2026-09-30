import { render, screen, fireEvent } from '@testing-library/react';
import { NumberInput } from '../../src/components/NumberInput';

describe('NumberInput', () => {
  it('renders input', () => {
    render(<NumberInput value={10} />);

    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
  });

  it('calls onValueChange when typing', () => {
    const handleChange = jest.fn();

    render(
      <NumberInput
        value={10}
        onValueChange={handleChange}
      />,
    );

    fireEvent.change(screen.getByRole('spinbutton'), {
      target: {
        value: '20',
      },
    });

    expect(handleChange).toHaveBeenCalledWith(20);
  });

  it('increments value when plus button is clicked', () => {
    const handleChange = jest.fn();

    render(
      <NumberInput
        variant="stepper"
        value={5}
        onValueChange={handleChange}
      />,
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /increase value/i,
      }),
    );

    expect(handleChange).toHaveBeenCalledWith(6);
  });

  it('decrements value when minus button is clicked', () => {
    const handleChange = jest.fn();

    render(
      <NumberInput
        variant="stepper"
        value={5}
        onValueChange={handleChange}
      />,
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /decrease value/i,
      }),
    );

    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it('renders currency symbol', () => {
    render(
      <NumberInput
        variant="currency"
        currencySymbol="$"
        value={100}
      />,
    );

    expect(screen.getByText('$')).toBeInTheDocument();
  });

  it('does not exceed max value', () => {
    const handleChange = jest.fn();

    render(
      <NumberInput
        variant="stepper"
        value={10}
        max={10}
        onValueChange={handleChange}
      />,
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /increase value/i,
      }),
    );

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('does not go below min value', () => {
    const handleChange = jest.fn();

    render(
      <NumberInput
        variant="stepper"
        value={0}
        min={0}
        onValueChange={handleChange}
      />,
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /decrease value/i,
      }),
    );

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('disables input when disabled prop is passed', () => {
    render(
      <NumberInput
        value={10}
        disabled
      />,
    );

    expect(screen.getByRole('spinbutton')).toBeDisabled();
  });
});