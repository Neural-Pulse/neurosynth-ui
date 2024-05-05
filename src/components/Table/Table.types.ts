export interface TableColumn {
    header: string;
    accessor: string;
}

export interface TableProps {
    data: Record<string, any>[];
    columns: TableColumn[];
}
