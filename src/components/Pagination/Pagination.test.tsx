import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '.';
import '@testing-library/jest-dom';

describe('Pagination', () => {
    it('renders the correct number of pages', () => {
        const onPageChange = jest.fn();
        render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
        expect(screen.getAllByRole('button').length).toBe(5);
    });

    it('calls onPageChange with the correct page number when a page button is clicked', () => {
        const onPageChange = jest.fn();
        render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
        fireEvent.click(screen.getByText('3'));
        expect(onPageChange).toHaveBeenCalledWith(3);
    });
});
