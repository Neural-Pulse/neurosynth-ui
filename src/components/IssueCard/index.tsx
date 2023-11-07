import React from 'react';
import { IssueCardProps } from './IssueCard.types';

const IssueCard: React.FC<IssueCardProps> = ({
    title,
    description,
    priority,
    priorityColor,
    dueDate,
    status,
    statusColor,
}) => {
    return (
        <div className={`p-4 max-w-sm bg-white rounded-xl shadow-neon-md border-l-4 ${statusColor}`}>
            <h2 className="font-bold text-dark-blue mb-2 text-xl">{title}</h2>
            <p className="text-dark-gray mb-4">{description}</p>
            <div className="flex justify-between items-center">
                <span className={`inline-block px-3 py-1 text-sm font-semibold ${priorityColor} rounded-full`}>
                    {priority}
                </span>
                <span className="text-light-gray">{new Date(dueDate).toLocaleDateString()}</span>
            </div>
        </div>
    );
};

export default IssueCard;