import React, { useState } from 'react';
import { TooltipProps } from './Tooltip.types';
import clsx from 'clsx';

const Tooltip: React.FC<TooltipProps> = ({ message, position = 'bottom', children, className }) => {
    const [isVisible, setIsVisible] = useState(false);

    const showTooltip = () => setIsVisible(true);
    const hideTooltip = () => setIsVisible(false);

    const positionClasses = {
        top: 'bottom-full mb-2',
        bottom: 'top-full mt-2',
        left: 'right-full mr-2',
        right: 'left-full ml-2',
    };

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onFocus={showTooltip}
            onBlur={hideTooltip}
        >
            {children}
            {isVisible && (
                <div
                    role="tooltip"
                    aria-label={message}
                    data-testid={`tooltip-${position}`}
                    className={clsx(
                        'absolute z-10 bg-neuralpulse-dark text-neuralpulse-light-green text-xs rounded py-1 px-3 shadow-md transition-opacity duration-300',
                        positionClasses[position],
                        className
                    )}
                >
                    {message}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
