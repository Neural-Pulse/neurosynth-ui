import React, { useState } from 'react';
import { DropdownMenuProps } from './DropdownMenu.types';

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, label }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="text-neuralpulse-dark bg-neuralpulse-light-green rounded-md px-4 py-2 hover:bg-neuralpulse-green"
            >
                {label}
            </button>
            {isOpen && (
                <div className="absolute z-10 w-56 mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                    <ul className="py-1">
                        {items.map((item, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        item.action();
                                    }}
                                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;