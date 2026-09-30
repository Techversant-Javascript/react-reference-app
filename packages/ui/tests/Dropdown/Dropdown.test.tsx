import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Dropdown } from '../../src/components/Dropdown';

describe('Dropdown', () => {
  const basicItems = [
    {
      id: '1',
      label: 'Profile',
    },
    {
      id: '2',
      label: 'Settings',
    },
  ];

  it('renders trigger button', () => {
    render(
      <Dropdown
        label="Open Menu"
        items={basicItems}
      />
    );

    expect(
      screen.getByRole('button', {
        name: 'Open Menu',
      })
    ).toBeInTheDocument();
  });

  it('does not show menu initially', () => {
    render(
      <Dropdown
        label="Open Menu"
        items={basicItems}
      />
    );

    expect(
      screen.queryByText('Profile')
    ).not.toBeInTheDocument();
  });

  it('opens menu when trigger is clicked', () => {
    render(
      <Dropdown
        label="Open Menu"
        items={basicItems}
      />
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Open Menu',
      })
    );

    expect(
      screen.getByText('Profile')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Settings')
    ).toBeInTheDocument();
  });

  it('toggles menu visibility', () => {
    render(
      <Dropdown
        label="Open Menu"
        items={basicItems}
      />
    );

    const trigger = screen.getByRole('button', {
      name: 'Open Menu',
    });

    fireEvent.click(trigger);

    expect(
      screen.getByText('Profile')
    ).toBeInTheDocument();

    fireEvent.click(trigger);

    expect(
      screen.queryByText('Profile')
    ).not.toBeInTheDocument();
  });

  it('calls item click handler', () => {
    const handleClick = jest.fn();

    render(
      <Dropdown
        label="Open Menu"
        items={[
          {
            id: '1',
            label: 'Profile',
            onClick: handleClick,
          },
        ]}
      />
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Open Menu',
      })
    );

    fireEvent.click(
      screen.getByText('Profile')
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders link item', () => {
    render(
      <Dropdown
        label="Open Menu"
        items={[
          {
            id: '1',
            label: 'Documentation',
            href: '/docs',
          },
        ]}
      />
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Open Menu',
      })
    );

    const link = screen.getByRole('link', {
      name: 'Documentation',
    });

    expect(link).toHaveAttribute(
      'href',
      '/docs'
    );
  });

  it('renders disabled item', () => {
    render(
      <Dropdown
        label="Open Menu"
        items={[
          {
            id: '1',
            label: 'Disabled Item',
            disabled: true,
          },
        ]}
      />
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Open Menu',
      })
    );

    expect(
      screen.getByRole('button', {
        name: 'Disabled Item',
      })
    ).toBeDisabled();
  });

  it('renders submenu items on hover', () => {
    render(
      <Dropdown
        label="Open Menu"
        items={[
          {
            id: '1',
            label: 'More',
            children: [
              {
                id: '1-1',
                label: 'Users',
              },
            ],
          },
        ]}
      />
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Open Menu',
      })
    );

    fireEvent.mouseEnter(
      screen.getByText('More')
    );

    expect(
      screen.getByText('Users')
    ).toBeInTheDocument();
  });
});

it('closes menu when clicking outside', () => {
  render(
    <div>
      <Dropdown
        label="Open Menu"
        items={[
          {
            id: '1',
            label: 'Profile',
          },
        ]}
      />

      <button>
        Outside
      </button>
    </div>
  );

  fireEvent.click(
    screen.getByRole('button', {
      name: 'Open Menu',
    })
  );

  expect(
    screen.getByText('Profile')
  ).toBeInTheDocument();

  fireEvent.mouseDown(
    screen.getByRole('button', {
      name: 'Outside',
    })
  );

  expect(
    screen.queryByText('Profile')
  ).not.toBeInTheDocument();
});