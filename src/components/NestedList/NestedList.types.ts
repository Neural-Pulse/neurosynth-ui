export interface NestedListProps {
    items: Item[];
}

export interface Item {
    title: string;
    subItems?: Item[];
}