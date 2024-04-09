import React from 'react';
import { ToolbarProps } from './Toolbar.types';
import { FiMenu } from 'react-icons/fi';

const Toolbar: React.FC<ToolbarProps> = ({
    title,
    onMenuClick,
    children
}) => {
    return (
        <nav className="flex items-center justify-between p-4 bg-neuralpulse-white text-neuralpulse-green shadow-green-glow-md lg:px-8">
            <button
                onClick={onMenuClick}
                className="p-2 text-neuralpulse-light-green hover:bg-neuralpulse-white focus:outline-none focus:ring-2 focus:ring-neuralpulse-light-green rounded-md transition ease-in duration-200"
                aria-label="Open main menu"
            >
                <FiMenu className="text-2xl" />
            </button>
            <h1 className="text-lg font-bold">{title}</h1>
            <div>
                {children}
            </div>
        </nav>
    );
};

export default Toolbar;