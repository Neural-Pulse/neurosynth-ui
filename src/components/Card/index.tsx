import React from 'react';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ title, text }) => {
    return (
        <div className="bg-white p-4 rounded-ms shadow-soft-green-glow">
            <h2 className="text-neuralpulse-dark text-lg font-bold">{title}</h2>
            <p className="text-neuralpulse-accent">{text}</p>
        </div>
    );
};

export default Card;