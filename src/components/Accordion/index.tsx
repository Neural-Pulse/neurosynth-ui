import React, { useState } from 'react';
import { AccordionProps, AccordionItemProps } from './Accordion.types';
import clsx from 'clsx';

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpenInitially = false }) => {
    const [isOpen, setIsOpen] = useState(isOpenInitially);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="border-b border-neuralpulse-gray">
            <button
                className="py-2 px-4 w-full text-left text-neuralpulse-dark bg-neuralpulse-gray hover:bg-neuralpulse-light-green font-bold flex justify-between items-center"
                onClick={toggleOpen}
                aria-expanded={isOpen}
                aria-controls={title.replace(/\s+/g, '-').toLowerCase()}
            >
                <span>{title}</span>
                <span>{isOpen ? '-' : '+'}</span> {/* Icone que indica o estado */}
            </button>
            {isOpen && (
                <div id={title.replace(/\s+/g, '-').toLowerCase()} className="p-4 transition-all duration-300">
                    {children}
                </div>
            )}
        </div>
    );
};

const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
    return (
        <div className={clsx('divide-y divide-neuralpulse-gray', className)}>
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title} isOpenInitially={item.isOpenInitially}>
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;
