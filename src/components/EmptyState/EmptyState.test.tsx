import { render, screen, fireEvent } from '@testing-library/react';
import EmptyState from '.';
import '@testing-library/jest-dom';

describe('EmptyState', () => {
    it('renders the message', () => {
        render(<EmptyState message="No items found" />);
        expect(screen.getByText('No items found')).toBeInTheDocument();
    });

    it('renders a button when actionText and onAction are provided', () => {
        const handleAction = jest.fn();
        render(<EmptyState message="No items found" actionText="Add Item" onAction={handleAction} />);
        const button = screen.getByText('Add Item');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(handleAction).toHaveBeenCalled();
    });

    it('does not render a button when actionText is not provided', () => {
        render(<EmptyState message="No items found" />);
        expect(screen.queryByRole('button')).toBeNull();
    });
});
