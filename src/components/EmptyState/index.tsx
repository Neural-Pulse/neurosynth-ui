import React from 'react';
import { EmptyStateProps } from './EmptyState.types';

const EmptyState: React.FC<EmptyStateProps> = ({ message, actionText, onAction }) => {
    return (
        <div className="text-center p-10">
            <h2 className="text-lg font-bold text-neuralpulse-dark mb-4">No Data Available</h2>
            <p className="text-neuralpulse-gray mb-6">{message}</p>
            {actionText && onAction && (
                <button
                    className="bg-neuralpulse-green text-white font-bold py-2 px-4 rounded hover:bg-neuralpulse-light-green"
                    onClick={onAction}
                >
                    {actionText}
                </button>
            )}
        </div>
    );
};

export default EmptyState;
