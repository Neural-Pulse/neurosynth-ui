import React from 'react';
import { TableProps } from './Table.types';

const Table: React.FC<TableProps> = ({ data, columns }) => {
    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-neuralpulse-gray">
                <tr>
                    {columns.map((column, index) => (
                        <th key={index} className="px-6 py-3 text-left text-xs font-medium text-neuralpulse-dark uppercase tracking-wider">
                            {column.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item[column.accessor]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
