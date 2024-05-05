import React, { useState } from 'react';
import { AccordionProps, AccordionItemProps } from './Accordion.types';

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpenInitially = false }) => {
    const [isOpen, setIsOpen] = useState(isOpenInitially);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="border-b border-neuralpulse-gray">
            <button
                className="py-2 px-4 w-full text-left text-neuralpulse-dark bg-neuralpulse-gray hover:bg-neuralpulse-light-green font-bold"
                onClick={toggleOpen}
            >
                {title}
            </button>
            {isOpen && (
                <div className="p-4">
                    {children}
                </div>
            )}
        </div>
    );
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
        <div className="divide-y divide-neuralpulse-gray">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title} isOpenInitially={item.isOpenInitially}>
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;
