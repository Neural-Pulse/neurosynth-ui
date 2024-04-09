import { ReactNode } from 'react';

export interface AppBarProps {
    leading?: ReactNode;
    title?: string;
    user?: {
        name: string;
        avatar?: string;
    };
}
