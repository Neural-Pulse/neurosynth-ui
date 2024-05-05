import React from 'react';
import { TagProps } from './Tag.types';

const Tag: React.FC<TagProps> = ({ label, onClose, color = 'neuralpulse-green' }) => {
    const baseStyle = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
    const colorStyle = `bg-${color} text-white`;

    return (
        <div className={`${baseStyle} ${colorStyle}`}>
            {label}
            {onClose && (
                <button onClick={onClose} className="ml-2">
                    <span className="text-xl">&times;</span>
                </button>
            )}
        </div>
    );
};

export default Tag;
