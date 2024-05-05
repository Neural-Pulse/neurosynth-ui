import React from 'react';
import { TimelineProps, TimelineItemProps } from './Timeline.types';

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, time }) => {
    return (
        <div className="flex items-start space-x-4">
            <div className="mt-1">
                <span className="block h-3 w-3 rounded-full bg-neuralpulse-green"></span>
            </div>
            <div className="flex-1 pt-1">
                <h4 className="text-sm font-bold text-neuralpulse-dark">{title}</h4>
                <p className="text-sm text-neuralpulse-gray">{description}</p>
                <p className="text-xs text-neuralpulse-dark">{time}</p>
            </div>
        </div>
    );
};

const Timeline: React.FC<TimelineProps> = ({ items, orientation = 'vertical' }) => {
    const baseClass = orientation === 'vertical' ? "border-l-2 border-neuralpulse-green pl-4" : "border-t-2 border-neuralpulse-green pt-4 flex flex-row";
    return (
        <div className={baseClass}>
            {items.map((item, index) => (
                <TimelineItem key={index} title={item.title} description={item.description} time={item.time} />
            ))}
        </div>
    );
};

export default Timeline;
