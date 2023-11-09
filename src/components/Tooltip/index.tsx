import React, { useState } from 'react';
import { TooltipProps } from './Tooltip.types';

const Tooltip: React.FC<TooltipProps> = ({ message, position, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const showTooltip = () => setIsVisible(true);
    const hideTooltip = () => setIsVisible(false);

    let positionClasses = ' ';
    switch (position) {
        case 'top':
            positionClasses = 'bottom-full mb-2';
            break;
        case 'bottom':
            positionClasses = 'top-full mt-2';
            break;
        case 'left':
            positionClasses = 'right-full mr-2';
            break;
        case 'right':
            positionClasses = 'left-full ml-2';
            break;
        default:
            positionClasses = 'top-full mt-2';
    }

    return (
        <div className="relative flex items-center" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            {children}
            {isVisible && (
                <div className={`absolute z-10 ${positionClasses} bg-neuralpulse-dark text-neuralpulse-light-green text-xs rounded py-1 px-3 shadow-md`}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
