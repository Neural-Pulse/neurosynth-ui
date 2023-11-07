import React from 'react';
export interface CardProps {
    title: string;
    text: string;
}
declare const Card: React.FC<CardProps>;
export default Card;
