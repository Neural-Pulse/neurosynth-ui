import React, { useEffect, useState } from 'react';
import { SnackbarProps } from './Snackbar.types';

const Snackbar: React.FC<SnackbarProps> = ({ message, duration = 3000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onClose) {
                onClose();
            }
        }, duration);

        return () => {
            clearTimeout(timer);
            if (isVisible && onClose) {
                onClose();
            }
        };
    }, [duration, onClose, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-neuralpulse-dark text-white px-6 py-3 rounded">
            {message}
        </div>
    );
};

export default Snackbar;
