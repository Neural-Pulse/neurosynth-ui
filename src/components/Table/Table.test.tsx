import { render, screen } from '@testing-library/react';
import Table from '.';
import '@testing-library/jest-dom';

describe('Table', () => {
    const columns = [
        { header: 'Name', accessor: 'name' },
        { header: 'Age', accessor: 'age' }
    ];
    const data = [
        { name: 'John Doe', age: 30 },
        { name: 'Jane Doe', age: 25 }
    ];

    it('renders the correct number of rows', () => {
        render(<Table data={data} columns={columns} />);
        expect(screen.getAllByRole('row').length).toBe(3); // includes header row
    });

    it('renders the correct data in cells', () => {
        render(<Table data={data} columns={columns} />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Jane Doe')).toBeInTheDocument();
        expect(screen.getByText('30')).toBeInTheDocument();
        expect(screen.getByText('25')).toBeInTheDocument();
    });
});
