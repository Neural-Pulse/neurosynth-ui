import React, { useState } from 'react';
import { CollapseProps } from './Collapse.types';

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div
                className="cursor-pointer px-3 py-2 hover:bg-gray-200 flex justify-between items-center"
                onClick={toggle}
            >
                {title}
                <span>{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && <div className="pl-4">{children}</div>}
        </div>
    );
};

export default Collapse;
