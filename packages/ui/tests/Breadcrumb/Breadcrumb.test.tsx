import { render, screen } from '@testing-library/react';
import { Breadcrumb } from '../../src/components/Breadcrumb/Breadcrumb';

const defaultItems = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Breadcrumb', active: true },
];

describe('Breadcrumb', () => {
  // ── Rendering ────────────────────────────────────────────────────────────

  it('renders all breadcrumb item labels', () => {
    render(<Breadcrumb items={defaultItems} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Components')).toBeInTheDocument();
    expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
  });

  it('renders a <nav> with aria-label="Breadcrumb"', () => {
    render(<Breadcrumb items={defaultItems} />);
    expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeInTheDocument();
  });

  // ── Active state ─────────────────────────────────────────────────────────

  it('marks the explicitly active item with aria-current="page"', () => {
    render(<Breadcrumb items={defaultItems} />);
    const activeItem = screen.getByText('Breadcrumb');
    expect(activeItem).toHaveAttribute('aria-current', 'page');
  });

  it('does not set aria-current on non-active items', () => {
    render(<Breadcrumb items={defaultItems} />);
    const homeItem = screen.getByText('Home');
    expect(homeItem).not.toHaveAttribute('aria-current');
  });

  it('treats the last item as active when no item has active:true', () => {
    const items = [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Team' },
    ];
    render(<Breadcrumb items={items} />);
    expect(screen.getByText('Team')).toHaveAttribute('aria-current', 'page');
  });

  // ── Separators ───────────────────────────────────────────────────────────

  it('renders with chevron separator by default', () => {
    const { container } = render(<Breadcrumb items={defaultItems} />);
    // Default renders SVG separators — there should be 2 separators for 3 items
    const separators = container.querySelectorAll('[aria-hidden="true"]');
    expect(separators).toHaveLength(2);
  });

  it('renders with slash separator', () => {
    const { container } = render(<Breadcrumb items={defaultItems} separator="slash" />);
    const separators = container.querySelectorAll('[aria-hidden="true"]');
    expect(separators).toHaveLength(2);
  });

  it('renders with dot separator', () => {
    const { container } = render(<Breadcrumb items={defaultItems} separator="dot" />);
    const separators = container.querySelectorAll('[aria-hidden="true"]');
    expect(separators).toHaveLength(2);
  });

  it('renders with arrow separator', () => {
    const { container } = render(<Breadcrumb items={defaultItems} separator="arrow" />);
    const separators = container.querySelectorAll('[aria-hidden="true"]');
    expect(separators).toHaveLength(2);
  });

  it('uses a custom separator when customSeparator prop is provided', () => {
    render(
      <Breadcrumb items={defaultItems} customSeparator={<span data-testid="custom-sep">|</span>} />
    );
    const customSeps = screen.getAllByTestId('custom-sep');
    // 3 items → 2 separators
    expect(customSeps).toHaveLength(2);
  });

  // ── No separator before first item ───────────────────────────────────────

  it('does not render a separator before the first item', () => {
    const { container } = render(
      <Breadcrumb items={[{ label: 'Home', href: '#' }, { label: 'Page', active: true }]} />
    );
    const separators = container.querySelectorAll('[aria-hidden="true"]');
    expect(separators).toHaveLength(1);
  });

  // ── Single item ───────────────────────────────────────────────────────────

  it('renders a single item with no separator', () => {
    const { container } = render(
      <Breadcrumb items={[{ label: 'Home', active: true }]} />
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(0);
  });

  // ── Icons ────────────────────────────────────────────────────────────────

  it('renders item icons when provided', () => {
    const items = [
      { label: 'Home', href: '#', icon: <svg data-testid="home-icon" /> },
      { label: 'Page', active: true },
    ];
    render(<Breadcrumb items={items} />);
    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
  });

  // ── Sizes ────────────────────────────────────────────────────────────────

  it('renders without errors for size="sm"', () => {
    render(<Breadcrumb items={defaultItems} size="sm" />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders without errors for size="lg"', () => {
    render(<Breadcrumb items={defaultItems} size="lg" />);
    expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
  });

  // ── Links ────────────────────────────────────────────────────────────────

  it('renders non-active items as anchor tags with href', () => {
    render(<Breadcrumb items={defaultItems} />);
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '#');
  });

  it('renders active items without an href', () => {
    render(<Breadcrumb items={defaultItems} />);
    const activeEl = screen.getByText('Breadcrumb');
    expect(activeEl.tagName.toLowerCase()).toBe('span');
    expect(activeEl).not.toHaveAttribute('href');
  });
});
