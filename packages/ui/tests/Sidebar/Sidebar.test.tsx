import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from '../../src/components/Sidebar/Sidebar';

const mockItems = [
  { id: '1', label: 'Home' },
  { id: '2', label: 'Settings' },
];

describe('Sidebar Component', () => {
  it('renders correctly with given items', () => {
    render(<Sidebar items={mockItems} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('toggles collapse state when the toggle button is clicked', () => {
    const onToggleMock = jest.fn();
    render(<Sidebar items={mockItems} onToggle={onToggleMock} isCollapsed={false} />);
    
    // The toggle button should be in the document
    const toggleButton = screen.getByLabelText('Toggle Sidebar');
    fireEvent.click(toggleButton);
    
    expect(onToggleMock).toHaveBeenCalledWith(true);
  });

  it('hides labels when collapsed', () => {
    render(<Sidebar items={mockItems} isCollapsed={true} />);
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.queryByText('Settings')).not.toBeInTheDocument();
  });

  it('renders nested menu items when parent is clicked', () => {
    const nestedItems = [
      {
        id: '1',
        label: 'Users',
        children: [{ id: '1-1', label: 'Admin' }]
      }
    ];
    render(<Sidebar items={nestedItems} />);
    
    // Initially nested item should not be visible
    expect(screen.queryByText('Admin')).not.toBeInTheDocument();
    
    // Click parent
    const parentItem = screen.getByText('Users');
    fireEvent.click(parentItem);
    
    // Nested item should now be visible
    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  it('triggers item onClick handler when an item is clicked', () => {
    const onClickMock = jest.fn();
    const items = [{ id: '1', label: 'Dashboard', onClick: onClickMock }];
    
    render(<Sidebar items={items} />);
    
    const dashboardItem = screen.getByText('Dashboard');
    fireEvent.click(dashboardItem);
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
