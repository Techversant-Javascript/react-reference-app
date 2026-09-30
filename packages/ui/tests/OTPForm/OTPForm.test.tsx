import { fireEvent, render, screen } from '@testing-library/react';
import { OTPForm } from '../../src/components/OTPForm';

describe('OTPForm', () => {
  test('renders 6 inputs', () => {
    render(<OTPForm />);

    expect(screen.getAllByRole('textbox')).toHaveLength(6);
  });

  test('paste full code works', () => {
    render(<OTPForm />);

    const wrapper = screen.getAllByRole('textbox')[0].parentElement!;

    fireEvent.paste(wrapper, {
      clipboardData: {
        getData: () => '123456',
      },
    });

    const inputs = screen.getAllByRole('textbox');

    expect(inputs[0]).toHaveValue('1');
    expect(inputs[5]).toHaveValue('6');
  });
});