import { render, screen } from '@testing-library/react';
import Board from '.';
import '@testing-library/jest-dom';

describe('Board', () => {
    const columns = [
        { id: 'col1', title: 'To Do', items: [{ id: 'item1', content: 'Task 1' }] },
        { id: 'col2', title: 'Done', items: [{ id: 'item2', content: 'Task 2' }] }
    ];

    it('renders columns with items', () => {
        render(<Board columns={columns} onDragEnd={() => { }} />);
        expect(screen.getByText('To Do')).toBeInTheDocument();
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Done')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
    });
});