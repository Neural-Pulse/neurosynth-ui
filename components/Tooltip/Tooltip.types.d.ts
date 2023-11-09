import { ReactNode } from 'react';
export interface TooltipProps {
    message: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children: ReactNode;
}
