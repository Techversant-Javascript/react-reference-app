import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert } from '../../src/components/Alert';

describe('Alert', () => {
  it('renders content', () => {
    render(<Alert>Test alert</Alert>);
    expect(screen.getByText('Test alert')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<Alert title="Title">Content</Alert>);
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('renders dismiss button when isDismissible', () => {
    render(<Alert isDismissible>Dismiss me</Alert>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('removes alert when close is clicked', async () => {
    const user = userEvent.setup();
    render(<Alert isDismissible>Dismiss me</Alert>);

    await user.click(screen.getByRole('button'));
    expect(screen.queryByText('Dismiss me')).not.toBeInTheDocument();
  });

  it('calls onClose when dismissed', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();

    render(
      <Alert isDismissible onClose={onClose}>
        Close test
      </Alert>
    );

    await user.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalled();
  });

  it('applies role="alert"', () => {
    render(<Alert>Accessible</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});