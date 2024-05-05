import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from '.';
import '@testing-library/jest-dom';

describe('Dialog', () => {
    it('does not render when isOpen is false', () => {
        render(<Dialog isOpen={false} onClose={() => { }} onConfirm={() => { }} title="Test Dialog">Content</Dialog>);
        expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
    });

    it('renders correctly when isOpen is true', () => {
        render(<Dialog isOpen={true} onClose={() => { }} onConfirm={() => { }} title="Test Dialog">Content</Dialog>);
        expect(screen.getByText('Test Dialog')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('calls onClose when the cancel button is clicked', () => {
        const handleClose = jest.fn();
        render(<Dialog isOpen={true} onClose={handleClose} onConfirm={() => { }} title="Test Dialog">Content</Dialog>);
        fireEvent.click(screen.getByText('Cancel'));
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onConfirm when the confirm button is clicked', () => {
        const handleConfirm = jest.fn();
        render(<Dialog isOpen={true} onClose={() => { }} onConfirm={handleConfirm} title="Test Dialog">Content</Dialog>);
        fireEvent.click(screen.getByText('Confirm'));
        expect(handleConfirm).toHaveBeenCalledTimes(1);
    });
});
