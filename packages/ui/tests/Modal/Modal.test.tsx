import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Modal } from '../../src/components/Modal/Modal';

// ─── Helpers ──────────────────────────────────────────────────────────────────

const noop = () => {};

const defaultProps = {
  open: true,
  onClose: noop,
  title: 'Test Modal',
  description: 'Test description',
};

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('Modal', () => {
  // ── Rendering ───────────────────────────────────────────────────────────────

  it('renders title and description when open', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('does not render anything when open is false', () => {
    render(<Modal {...defaultProps} open={false} />);
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  it('renders children inside the modal body', () => {
    render(
      <Modal {...defaultProps}>
        <p>Body content</p>
      </Modal>
    );
    expect(screen.getByText('Body content')).toBeInTheDocument();
  });

  it('renders with role="dialog" and aria-modal="true"', () => {
    render(<Modal {...defaultProps} />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  it('sets aria-labelledby on the dialog when a title is provided', () => {
    render(<Modal {...defaultProps} />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
  });

  // ── Variants ────────────────────────────────────────────────────────────────

  it.each(['standard', 'alert', 'form', 'destructive'] as const)(
    'renders variant "%s" without errors',
    (variant) => {
      render(<Modal {...defaultProps} variant={variant} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    }
  );

  // ── Sizes ───────────────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg'] as const)('renders size "%s" without errors', (size) => {
    render(<Modal {...defaultProps} size={size} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  // ── Close button ────────────────────────────────────────────────────────────

  it('renders a close button by default', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
  });

  it('hides the close button when hideCloseButton is true', () => {
    render(<Modal {...defaultProps} hideCloseButton />);
    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} />);
    fireEvent.click(screen.getByLabelText('Close modal'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // ── Esc key ─────────────────────────────────────────────────────────────────

  it('calls onClose when Escape key is pressed', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on Escape when closeOnEsc is false', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} closeOnEsc={false} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).not.toHaveBeenCalled();
  });

  // ── Actions ─────────────────────────────────────────────────────────────────

  it('renders primary action button', () => {
    const onClick = jest.fn();
    render(
      <Modal {...defaultProps} primaryAction={{ label: 'Confirm', onClick }} />
    );
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
  });

  it('renders secondary action button', () => {
    const onClick = jest.fn();
    render(
      <Modal {...defaultProps} secondaryAction={{ label: 'Cancel', onClick }} />
    );
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('calls primary action onClick when the button is clicked', () => {
    const onClick = jest.fn();
    render(
      <Modal {...defaultProps} primaryAction={{ label: 'Confirm', onClick }} />
    );
    fireEvent.click(screen.getByRole('button', { name: 'Confirm' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls secondary action onClick when the button is clicked', () => {
    const onClick = jest.fn();
    render(
      <Modal {...defaultProps} secondaryAction={{ label: 'Cancel', onClick }} />
    );
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('disables primary button when disabled prop is set', () => {
    render(
      <Modal
        {...defaultProps}
        primaryAction={{ label: 'Confirm', onClick: noop, disabled: true }}
      />
    );
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeDisabled();
  });

  it('disables primary button when loading is true', () => {
    render(
      <Modal
        {...defaultProps}
        primaryAction={{ label: 'Saving', onClick: noop, loading: true }}
      />
    );
    expect(screen.getByRole('button', { name: /saving/i })).toBeDisabled();
  });

  // ── No footer when no actions ────────────────────────────────────────────────

  it('does not render a footer when no actions are provided', () => {
    render(<Modal {...defaultProps} />);
    // If no actions exist, footer buttons should not appear
    expect(screen.queryByRole('button', { name: 'Confirm' })).not.toBeInTheDocument();
  });

  // ── Unmounting ───────────────────────────────────────────────────────────────

  it('removes content from DOM when open changes to false', async () => {
    const { rerender } = render(<Modal {...defaultProps} />);
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    rerender(<Modal {...defaultProps} open={false} />);
    await waitFor(() =>
      expect(screen.queryByText('Test Modal')).not.toBeInTheDocument()
    );
  });
});
