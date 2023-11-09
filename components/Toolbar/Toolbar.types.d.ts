/// <reference types="react" />
export interface ToolbarProps {
    title: string;
    onMenuClick: () => void;
    children?: React.ReactNode;
}
