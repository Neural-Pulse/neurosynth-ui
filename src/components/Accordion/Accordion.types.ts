export interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpenInitially?: boolean;
}

export interface AccordionProps {
    items: { title: string; content: React.ReactNode; isOpenInitially?: boolean }[];
    className?: string;
}
