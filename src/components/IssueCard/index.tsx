import React from 'react';
import { IssueCardProps } from './IssueCard.types';
import { FaBug, FaRocket, FaTasks } from 'react-icons/fa';
import { IconType } from 'react-icons';

const issueTypeIcons: Record<string, IconType> = {
    Bug: FaBug,
    Feature: FaRocket,
    Task: FaTasks,
};

const IssueCard: React.FC<IssueCardProps> = ({
    title,
    description,
    priority,
    priorityColor,
    dueDate,
    status,
    statusColor,
    type
}) => {
    const IssueIcon = issueTypeIcons[type] || null;
    return (
        <div className={`p-4 max-w-sm bg-white rounded-xl shadow-neon-md border-l-4 ${statusColor}`}>
            <div className="flex items-center mb-2">
                {IssueIcon && <IssueIcon className="text-xl mr-2" />} {/* Renderiza o ícone se existir */}
                <h2 className="font-bold text-dark-blue text-xl">{title}</h2>
            </div>
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