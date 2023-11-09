export interface Tab {
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface TabsProps {
    tabs: Tab[];
}