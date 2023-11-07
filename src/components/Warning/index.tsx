import React from 'react';
import { WarningProps } from './Warning.types';

const variantStyles = {
    success: 'shadow-success',
    warning: 'shadow-warning',
    error: 'shadow-error',
};

const Warning: React.FC<WarningProps> = ({ text, variant }) => {
    const variantClass = variantStyles[variant] || variantStyles.warning;

    return (
        <div className={`bg-white text-dark-blue font-bold p-2 rounded-x1 ${variantClass}`}>
            {text}
        </div>
    );
};

export default Warning;
