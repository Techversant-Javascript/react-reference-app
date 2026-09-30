import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, IconButton } from '../../src/components/Button/Button';

describe('Button', () => {
  it('renders children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it.each([
    ['solid', 'background', 'var(--color-brand-500)'],
    ['outline', 'background', 'transparent'],
    ['soft', 'background', 'var(--color-brand-50)'],
    ['link', 'text-decoration', 'underline'],
  ] as const)('applies %s variant styles', (variant, prop, value) => {
    const { container } = render(<Button variant={variant}>Button</Button>);
    const btn = container.querySelector('button')!;
    expect(btn).toHaveStyleRule(prop, value);
  });

  it.each([
    ['xs', '28px'],
    ['sm', '32px'],
    ['md', '36px'],
    ['lg', '42px'],
    ['xl', '50px'],
  ] as const)('applies %s size height', (size, height) => {
    const { container } = render(<Button size={size}>Button</Button>);
    const btn = container.querySelector('button')!;
    expect(btn).toHaveStyleRule('height', height);
  });

  it('defaults to brand color', () => {
    const { container } = render(<Button>Button</Button>);
    const btn = container.querySelector('button')!;
    expect(btn).toHaveStyleRule('background', 'var(--color-brand-500)');
  });

  it('applies danger color', () => {
    const { container } = render(<Button color="danger">Button</Button>);
    const btn = container.querySelector('button')!;
    expect(btn).toHaveStyleRule('background', 'var(--color-danger-500)');
  });

  it('disables the button when isLoading is true', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('sets aria-busy when isLoading is true', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('does not set aria-busy when not loading', () => {
    render(<Button>Not loading</Button>);
    expect(screen.getByRole('button')).not.toHaveAttribute('aria-busy');
  });

  it('shows a spinner when isLoading', () => {
    const { container } = render(<Button isLoading>Loading</Button>);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 });
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    );
    await user.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('does not call onClick when loading', async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 });
    const handleClick = jest.fn();
    render(
      <Button isLoading onClick={handleClick}>
        Loading
      </Button>,
    );
    await user.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('forwards ref to button element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('renders leftIcon when not loading', () => {
    render(<Button leftIcon={<span data-testid="left-icon" />}>Button</Button>);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('renders rightIcon when not loading', () => {
    render(<Button rightIcon={<span data-testid="right-icon" />}>Button</Button>);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('hides leftIcon and rightIcon when loading', () => {
    render(
      <Button
        isLoading
        leftIcon={<span data-testid="left-icon" />}
        rightIcon={<span data-testid="right-icon" />}
      >
        Button
      </Button>,
    );
    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });
});

describe('IconButton', () => {
  it('renders without visible text children', () => {
    render(<IconButton icon={<span data-testid="icon" />} aria-label="close" />);
    expect(screen.queryByText('close')).not.toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('applies aria-label', () => {
    render(<IconButton icon={<span />} aria-label="delete item" />);
    expect(screen.getByRole('button', { name: 'delete item' })).toBeInTheDocument();
  });

  it('forwards ref to button element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<IconButton ref={ref} icon={<span />} aria-label="icon button" />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('disables the button when isLoading is true', () => {
    render(<IconButton icon={<span />} aria-label="loading" isLoading />);
    expect(screen.getByRole('button', { name: 'loading' })).toBeDisabled();
  });

  it('sets aria-busy when isLoading is true', () => {
    render(<IconButton icon={<span />} aria-label="loading" isLoading />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });
});
