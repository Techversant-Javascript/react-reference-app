import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from '../../src/components/Loader/Loader';

describe('Loader Component', () => {
  test('renders spinner variant by default', () => {
    render(<Loader />);
    const loader = screen.getByRole('status');
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveAttribute('aria-label', 'Loading...');
  });

  test('renders dots variant', () => {
    render(<Loader variant="dots" />);
    const loader = screen.getByRole('status');
    expect(loader).toBeInTheDocument();
    expect(loader.children.length).toBe(3); // Should have 3 dots
  });

test('renders skeleton variant', () => {
  const { container } = render(
    <Loader variant="skeleton" width={100} height={20} />
  );

  const loader = container.firstChild;
  expect(loader).toBeInTheDocument();
  expect(loader).toHaveAttribute('aria-hidden', 'true');
});

  test('renders progress variant', () => {
    const labelText = 'Uploading...';
    render(<Loader variant="progress" value={45} label={labelText} showValue />);
    
    expect(screen.getByText(labelText)).toBeInTheDocument();
    expect(screen.getByText('45%')).toBeInTheDocument();
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '45');
  });

  test('applies custom size to spinner', () => {
    const { container } = render(<Loader variant="spinner" size="xl" />);
    const spinner = container.firstChild;
    // xl size maps to 48px in our styles
    expect(spinner).toHaveStyleRule('width', '48px');
    expect(spinner).toHaveStyleRule('height', '48px');
  });

  test('applies custom color', () => {
    const customColor = 'rgb(255, 0, 0)';
    const { container } = render(<Loader variant="spinner" color={customColor} />);
    const spinner = container.firstChild;
    expect(spinner).toHaveStyleRule('border-top-color', customColor);
  });

  test('supports custom aria-label', () => {
    render(<Loader aria-label="Please wait" />);
    expect(screen.getByLabelText('Please wait')).toBeInTheDocument();
  });
});
