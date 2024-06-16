import { render, screen } from '@testing-library/react';
import SideBar from './';
import { MdHome, MdSettings } from 'react-icons/md';

describe('SideBar', () => {
  const items = [
    { label: 'Home', icon: MdHome, onClick: jest.fn() },
    { label: 'Settings', icon: MdSettings, onClick: jest.fn() }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render sidebar with provided items', () => {
    render(<SideBar isOpen={true} items={items} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });
});
