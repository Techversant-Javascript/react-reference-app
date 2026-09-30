import { render, screen } from '@testing-library/react';
import { Notification } from '../../src/components/Notification/Notification';

describe('Notification', () => {
  it('renders title', () => {
    render(
      <Notification
        id="1"
        title="Success"
        message="Saved successfully"
        variant="success"
        onClose={jest.fn()}
      />
    );

    expect(
      screen.getByText('Success')
    ).toBeInTheDocument();
  });

  it('renders message', () => {
    render(
      <Notification
        id="1"
        title="Success"
        message="Saved successfully"
        variant="success"
        onClose={jest.fn()}
      />
    );

    expect(
      screen.getByText('Saved successfully')
    ).toBeInTheDocument();
  });

  it('renders alert role', () => {
    render(
      <Notification
        id="1"
        title="Success"
        message="Saved successfully"
        variant="success"
        onClose={jest.fn()}
      />
    );

    expect(
      screen.getByRole('alert')
    ).toBeInTheDocument();
  });
});