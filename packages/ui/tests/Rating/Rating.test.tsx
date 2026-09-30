import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Rating } from '../../src/components/Rating';

describe('Rating', () => {
  test('renders stars', () => {
    render(<Rating />);

    expect(
      screen.getAllByRole('radio')
    ).toHaveLength(5);
  });

  test('changes rating on click', async () => {
    const user = userEvent.setup();

    render(<Rating />);

    const stars =
      screen.getAllByRole('radio');

    await user.click(stars[3]);

    expect(stars[3]).toHaveAttribute(
      'aria-checked',
      'true',
    );
  });

  test('calls onChange', async () => {
    const user = userEvent.setup();

    const onChange = jest.fn();

    render(<Rating onChange={onChange} />);

    const stars =
      screen.getAllByRole('radio');

    await user.click(stars[4]);

    expect(onChange).toHaveBeenCalledWith(5);
  });
});