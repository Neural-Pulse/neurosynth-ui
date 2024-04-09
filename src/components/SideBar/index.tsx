import React from 'react';
import { SideBarProps } from './SideBar.types';

const SideBar: React.FC<SideBarProps> = ({ items }) => {
  return (
    <aside className="w-64 bg-neuralpulse-white text-neuralpulse-green shadow-green-glow-md">
      <div className="py-4 px-6">
        <h2 className="text-2xl font-bold text-neuralpulse-green">Sidebar</h2>
      </div>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <button
                onClick={item.onClick}
                className="flex items-center w-full py-2 px-6 text-neuralpulse-light-green hover:bg-neuralpulse-accent focus:outline-none"
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