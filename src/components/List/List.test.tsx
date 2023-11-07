import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from '.';

describe('List', () => {
    const mockItems = ['Item 1', 'Item 2', 'Item 3'];
    const mockOnItemClick = jest.fn();

    it('renders the list with items', () => {
        render(<List items={mockItems} onItemClick={mockOnItemClick} />);

        mockItems.forEach(item => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it('calls onItemClick when an item is clicked', () => {
        render(<List items={mockItems} onItemClick={mockOnItemClick} />);

        fireEvent.click(screen.getByText(mockItems[0]));

        expect(mockOnItemClick).toHaveBeenCalledWith(mockItems[0]);
    });

    it('does not break without an onItemClick handler', () => {
        render(<List items={mockItems} />);

        fireEvent.click(screen.getByText(mockItems[0]));
    });
});
