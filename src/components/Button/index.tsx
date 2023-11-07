// src/components/Button/Button.tsx
import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ label, onClick, variant }) => {
    let className = 'font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline transition duration-150 ease-in-out';

    switch (variant) {
        case 'contained':
            className += ' bg-neuralpulse-green text-white hover:bg-neuralpulse-gray';
            break;
        case 'outlined':
            className += ' text-neuralpulse-green border border-neuralpulse-green hover:bg-neuralpulse-green hover:text-white';
            break;
        case 'text':
            className += ' text-neuralpulse-green hover:bg-neuralpulse-gray';
            break;
        default:
            className += ' text-neuralpulse-green hover:bg-neuralpulse-gray';
    }

    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
