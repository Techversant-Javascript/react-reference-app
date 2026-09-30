import { render, screen, fireEvent } from '@testing-library/react';
import { ColorPicker } from '../../src/components/ColorPicker/ColorPicker';

describe('ColorPicker', () => {
  it('renders label', () => {
    render(
      <ColorPicker
        id="color"
        label="Choose color"
      />,
    );

    expect(
      screen.getByLabelText('Choose color'),
    ).toBeInTheDocument();
  });

  it('calls onValueChange', () => {
    const onValueChange = jest.fn();

    render(
      <ColorPicker
        value="#000000"
        onValueChange={onValueChange}
      />,
    );

    fireEvent.change(
      screen.getByDisplayValue('#000000'),
      {
        target: {
          value: '#ff0000',
        },
      },
    );

    expect(onValueChange).toHaveBeenCalledWith(
      '#ff0000',
    );
  });

  it('renders inline value', () => {
    render(
      <ColorPicker
        variant="inline"
        value="#123456"
      />,
    );

    expect(
      screen.getByText('#123456'),
    ).toBeInTheDocument();
  });
});