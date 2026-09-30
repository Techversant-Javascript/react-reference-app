import { render, screen } from '@testing-library/react';
import { Avatar, AvatarGroup } from '../../src/components/Avatar/Avatar';

describe('Avatar', () => {
  it('renders fallback initials when no image is provided', () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders single initial when only one name is provided', () => {
    render(<Avatar name="John" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders "?" when no name is provided', () => {
    render(<Avatar />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('renders image when src is provided', () => {
    render(<Avatar src="avatar.png" alt="profile" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'avatar.png');
    expect(img).toHaveAttribute('alt', 'profile');
  });

  it('applies correct size styles', () => {
    const { container } = render(<Avatar size="lg" name="Test" />);
    const avatar = container.firstChild;
    expect(avatar).toHaveStyle({
      width: '56px',
      height: '56px',
    });
  });

  it('renders status indicator when status is provided', () => {
    const { container } = render(<Avatar name="User" status="online" />);
    const statusDot = container.querySelector('span'); // StatusDot
    expect(statusDot).toBeInTheDocument();
  });

  it('does not render status indicator when not provided', () => {
    const { container } = render(<Avatar name="User" />);
    const spans = container.querySelectorAll('span');
    
    // Only fallback exists, no status dot
    expect(spans.length).toBe(1);
  });
});

describe('AvatarGroup', () => {
  it('renders multiple avatars', () => {
    render(
      <AvatarGroup>
        <Avatar name="A" />
        <Avatar name="B" />
        <Avatar name="C" />
      </AvatarGroup>
    );

    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
  });

  it('limits avatars based on max prop', () => {
    render(
      <AvatarGroup max={2}>
        <Avatar name="A" />
        <Avatar name="B" />
        <Avatar name="C" />
      </AvatarGroup>
    );

    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();

    // "+1" should appear
    expect(screen.getByText('+1')).toBeInTheDocument();
  });

  it('does not show +count when within max', () => {
    render(
      <AvatarGroup max={5}>
        <Avatar name="A" />
        <Avatar name="B" />
      </AvatarGroup>
    );

    expect(screen.queryByText(/\+/)).not.toBeInTheDocument();
  });
});