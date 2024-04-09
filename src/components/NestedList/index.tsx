import React from 'react';
import { NestedListProps } from './NestedList.types';

const NestedList: React.FC<NestedListProps> = ({ items }) => {
    return (
        <ul className="list-none p-0">
            {items.map((item, index) => (
                <li key={index} className="cursor-pointer px-3 py-2 shadow-green-glow-md border border-transparent hover:border-neuralpulse-green">
                    {item.title}
                    {item.subItems && item.subItems.length > 0 && (
                        <ul className="pl-4">
                            {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex} className="cursor-pointer px-3 py-2 hover:bg-neuralpulse-light-gray shadow-green-glow-md border border-transparent hover:border-neuralpulse-light-green">
                                    {subItem.title}
                                    {subItem.subItems && <NestedList items={subItem.subItems} />}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NestedList;
