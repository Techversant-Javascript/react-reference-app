import { fireEvent, render, screen } from '@testing-library/react';
import { Toast } from '../../src/components/Toast';

describe('Toast', () => {
  test('renders title and message', () => {
    render(
      <Toast
        title="Success"
        message="Completed"
      />
    );

    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  test('close button works', () => {
    render(<Toast title="Hi" message="Text" />);

    fireEvent.click(screen.getByText('×'));

    expect(screen.queryByText('Hi')).not.toBeInTheDocument();
  });
});