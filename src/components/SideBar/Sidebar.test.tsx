import { render, screen, fireEvent } from '@testing-library/react';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';
import SideBar from '.';

describe('SideBar', () => {
  const items = [
    { label: 'Home', icon: FiHome, onClick: jest.fn() },
    { label: 'Profile', icon: FiUser, onClick: jest.fn() },
    { label: 'Settings', icon: FiSettings, onClick: jest.fn() },
  ];

  it('renders the sidebar with the correct title', () => {
    render(<SideBar items={items} />);
    expect(screen.getByText('Sidebar')).toBeDefined();
  });

  it('renders the correct number of sidebar items', () => {
    render(<SideBar items={items} />);
    expect(screen.getAllByRole('button')).toHaveLength(items.length);
  });

  it('renders the sidebar items with the correct labels', () => {
    render(<SideBar items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeDefined();
    });
  });

  it('calls the onClick function when a sidebar item is clicked', () => {
    render(<SideBar items={items} />);
    const homeButton = screen.getByText('Home');
    fireEvent.click(homeButton);
    expect(items[0].onClick).toHaveBeenCalledTimes(1);
  });
});
