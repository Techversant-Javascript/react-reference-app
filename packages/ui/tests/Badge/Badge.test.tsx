import { render, screen } from '@testing-library/react';
import { Badge } from '../../src/components/Badge/Badge';


describe('Badge', () => {
  it('renders correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies correct variant and color', () => {
    render(<Badge variant="solid" color="brand">Badge</Badge>);
    const badge = screen.getByText('Badge');

    expect(badge).toBeInTheDocument();
  });

  it('renders children properly', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });
});