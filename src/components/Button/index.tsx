import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ label, onClick, variant }) => {
    let className = 'font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';

    if (variant === 'primary') {
        className += ' bg-blue-900 text-white';
    } else if (variant === 'secondary') {
        className += ' bg-cyan-500 text-white';
    }

    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
