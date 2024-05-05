import { render, screen, fireEvent } from '@testing-library/react';
import Tag from '.';
import '@testing-library/jest-dom';

describe('Tag', () => {
    it('renders the tag with the correct label', () => {
        render(<Tag label="Test Tag" />);
        expect(screen.getByText('Test Tag')).toBeInTheDocument();
    });

    it('calls onClose when the close button is clicked', () => {
        const handleClose = jest.fn();
        render(<Tag label="Closable Tag" onClose={handleClose} />);
        fireEvent.click(screen.getByText('×'));
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});
