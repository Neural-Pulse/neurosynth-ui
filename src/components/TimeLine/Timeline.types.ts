export interface TimelineItemProps {
    title: string;
    description: string;
    time: string;
}

export interface TimelineProps {
    items: TimelineItemProps[];
    orientation?: 'vertical' | 'horizontal'; // Added orientation option
}
