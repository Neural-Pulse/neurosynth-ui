import React from 'react';
import { AppBarProps } from './AppBar.types';
import Avatar from '../Avatar';

const AppBar: React.FC<AppBarProps> = ({ leading, title, user }) => {
    return (
        <header className="flex justify-between items-center px-4 py-2 bg-neuralpulse-white shadow-md sm:px-6 lg:px-8">
            <div className="flex items-center">
                {/* Implementação do botão de menu com acessibilidade */}
                <button
                    aria-label="Open menu"
                    className="mr-3 text-neuralpulse-light-green focus:outline-none focus:ring-2 focus:ring-neuralpulse-accent focus:ring-opacity-50 hover:bg-neuralpulse-gray rounded-md p-2"
                >
                    {leading}
                </button>
                <h1 className="text-lg font-semibold text-neuralpulse-green truncate">{title}</h1>
            </div>
            <div className="flex items-center">
                {user && (
                    <>
                        <span className="hidden sm:block text-neuralpulse-light-green mr-2">{user.name}</span>
                        <Avatar src={user.avatar} name={user.name} size={40} className="hover:shadow-success-glow" />
                    </>
                )}
            </div>
        </header>
    );
};

export default AppBar;