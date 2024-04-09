import React from 'react';
import { WarningProps } from './Warning.types';

const variantStyles = {
    success: 'shadow-success-glow',
    warning: 'shadow-warning-glow',
    error: 'shadow-error-glow',
};

const Warning: React.FC<WarningProps> = ({ text, variant }) => {
    const variantClass = variantStyles[variant] || variantStyles.warning;

    return (
        <div className={`bg-white text-neuralpulse-accent font-bold p-2 rounded-sm ${variantClass}`}>
            {text}
        </div>
    );
};

export default Warning;
