// SideBar.tsx
import React from 'react';

interface SideBarItem {
  label: string;
  icon: React.ElementType;
  onClick: () => void;
}

interface Theme {
  background: string;
  textColor: string;
  hoverBackgroundColor: string;
  focusOutline: string;
}

interface SideBarProps {
  items: SideBarItem[];
  isOpen: boolean;
  theme?: Theme;
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
}

const defaultTheme: Theme = {
  background: 'bg-neuralpulse-white',
  textColor: 'text-neuralpulse-green',
  hoverBackgroundColor: 'hover:bg-neuralpulse-accent',
  focusOutline: 'focus:outline-none',
};

const SideBar: React.FC<SideBarProps> = ({
  items,
  isOpen,
  theme = defaultTheme,
  className = '',
  itemClassName = '',
  titleClassName = '',
}) => {
  return (
    <aside className={`${theme.background} ${className} shadow-green-glow-md ${isOpen ? 'block' : 'hidden'}`}>
      <div className={`py-4 px-6 ${titleClassName}`}>
        <h2 className={`text-2xl font-bold ${theme.textColor}`}>Sidebar</h2>
      </div>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <button
                onClick={item.onClick}
                className={`flex items-center w-full py-2 px-6 ${theme.textColor} ${itemClassName} ${theme.hoverBackgroundColor} ${theme.focusOutline}`}
              >
                <item.icon className="mr-4" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
