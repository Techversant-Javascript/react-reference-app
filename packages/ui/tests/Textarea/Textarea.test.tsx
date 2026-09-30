import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Textarea} from '../../src/components/Textarea/Textarea'

describe('Textarea', () => {
  it('renders correctly', () => {
    render(<Textarea placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('updates the character count when the user types', async () => {
    const user = userEvent.setup();
    render(<Textarea showCharacterCount maxLength={100} />);
    
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'Hello World');
    
    // Checks if the counter shows the correct length
    expect(screen.getByText('11 / 100')).toBeInTheDocument();
  });

  it('displays the error message when the error prop is a string', () => {
    render(<Textarea error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('disables the textarea when the disabled prop is true', () => {
    render(<Textarea disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('applies the correct resize style based on the prop', () => {
    const { container, rerender } = render(<Textarea resize="none" />);
    let textarea = container.querySelector('textarea');
    expect(textarea).toHaveStyle({ resize: 'none' });

    rerender(<Textarea resize="vertical" />);
    textarea = container.querySelector('textarea');
    expect(textarea).toHaveStyle({ resize: 'vertical' });
  });

  it('prevents typing beyond maxLength', async () => {
    const user = userEvent.setup();
    render(<Textarea maxLength={5} />);
    
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'More than five');
    
    expect(textarea).toHaveValue('More ');
  });
});