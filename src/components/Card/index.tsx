import React from 'react';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ title, text }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-dark-blue text-lg font-bold">{title}</h2>
            <p className="text-dark-gray">{text}</p>
        </div>
    );
};

export default Card;