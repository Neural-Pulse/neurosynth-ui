import React from 'react';
import { ListProps } from './List.types';

const List: React.FC<ListProps> = ({ items, onItemClick }) => {
    return (
        <ul className="list-none p-0 m-0">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="cursor-pointer px-3 py-2 hover:bg-neuralpulse-gray text-neuralpulse-dark shadow-green-glow-md"
                    onClick={() => onItemClick?.(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default List;
