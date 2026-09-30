import { render, screen, fireEvent } from '@testing-library/react';
import { Tag } from '../../src/components/Tag/Tag';


describe('Tag', () => {
  it('renders correctly', () => {
    render(<Tag>Test Tag</Tag>);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('applies correct variant and color', () => {
    render(<Tag variant="solid" color="brand">Tag</Tag>);
    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();
  });

  it('renders children properly', () => {
    render(<Tag>New</Tag>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('calls onRemove when close button is clicked', () => {
    const onRemove = jest.fn();
    render(<Tag onRemove={onRemove}>Removable Tag</Tag>);
    
    const closeButton = screen.getByLabelText('Remove tag');
    fireEvent.click(closeButton);
    
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it('does not render close button when onRemove is not provided', () => {
    render(<Tag>Static Tag</Tag>);
    expect(screen.queryByLabelText('Remove tag')).not.toBeInTheDocument();
  });
});
