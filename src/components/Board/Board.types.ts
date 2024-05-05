export interface Item {
    id: string;
    content: string;
}

export interface Column {
    id: string;
    title: string;
    items: Item[];
}

export interface BoardProps {
    columns: Column[];
    onDragEnd: (result: any) => void;
}

export interface ColumnProps {
    column: Column;
    index: number;
}