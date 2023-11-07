import React from 'react';
import { WarningProps } from './Warning.types';

const Warning: React.FC<WarningProps> = ({ text }) => {
    return (
        <div className="bg-neon-green text-dark-blue font-bold p-2 rounded-md">
            {text}
        </div>
    );
};

export default Warning;
