import { ReactNode } from 'react';

export interface AccordionItemProps {
    title: string;
    children: ReactNode;
    isOpenInitially?: boolean;
}

export interface AccordionProps {
    items: Array<{
        title: string;
        content: ReactNode;
        isOpenInitially?: boolean;
    }>;
}
