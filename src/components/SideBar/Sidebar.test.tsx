// SideBar.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SideBar from './';
import { MdHome, MdSettings } from 'react-icons/md';

describe('SideBar', () => {
  const items = [
    { label: 'Home', icon: MdHome, onClick: jest.fn() },
    { label: 'Settings', icon: MdSettings, onClick: jest.fn() }
  ];

  it('should render sidebar with provided items', () => {
    render(<SideBar isOpen={true} items={items} />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
  });

  it('should call onClick when an item is clicked', () => {
    render(<SideBar isOpen={true} items={items} />);

    const homeButton = screen.getByText(/home/i);
    userEvent.click(homeButton);
    expect(items[0].onClick).toHaveBeenCalled();
  });

  it('should be visible when isOpen is true', () => {
    render(<SideBar isOpen={true} items={items} />);
    const sidebar = screen.getByText(/home/i).closest('aside');
    expect(sidebar).not.toHaveClass('hidden');
  });

  it('should be hidden when isOpen is false', () => {
    render(<SideBar isOpen={false} items={items} />);
    const sidebar = screen.getByText(/home/i).closest('aside');
    expect(sidebar).toHaveClass('hidden');
  });

  it('should render custom theme colors', () => {
    const customTheme = {
      background: 'bg-blue-500',
      textColor: 'text-yellow-500',
      hoverBackgroundColor: 'hover:bg-red-500',
      focusOutline: 'focus:outline-none',
    };
    render(<SideBar isOpen={true} items={items} theme={customTheme} />);
    const sidebar = screen.getByText(/home/i).closest('aside');
    expect(sidebar).toHaveClass('bg-blue-500');
    expect(screen.getByText(/home/i)).toHaveClass('text-yellow-500');
  });

  it('should accept and apply custom class names', () => {
    render(
      <SideBar
        isOpen={true}
        items={items}
        className="extra-class"
        itemClassName="item-extra-class"
        titleClassName="title-extra-class"
      />
    );
    const sidebar = screen.getByText(/home/i).closest('aside');
    expect(sidebar).toHaveClass('extra-class');

    const title = screen.getByRole('heading');
    expect(title).toHaveClass('title-extra-class');

    const item = screen.getByText(/home/i).closest('li');
    expect(item).toHaveClass('item-extra-class');
  });

  it('should handle clicks on multiple items', () => {
    render(<SideBar isOpen={true} items={items} />);
    const settingsButton = screen.getByText(/settings/i);
    userEvent.click(settingsButton);
    expect(items[1].onClick).toHaveBeenCalled();
  });

  it('should render icons for each item', () => {
    render(<SideBar isOpen={true} items={items} />);
    expect(screen.getByText(/home/i).previousSibling).toBeTruthy();
    expect(screen.getByText(/settings/i).previousSibling).toBeTruthy();
  });

  it('should not render when items list is empty', () => {
    render(<SideBar isOpen={true} items={[]} />);
    expect(screen.queryByText(/home/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/settings/i)).not.toBeInTheDocument();
  });
});
