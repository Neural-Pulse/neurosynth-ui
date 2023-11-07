import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '.';

describe('Modal', () => {
    const title = 'Test Modal';
    const content = 'This is the modal content';
    const onClose = jest.fn();

    it('renders the modal when isOpen is true', () => {
        render(<Modal isOpen={true} onClose={onClose} title={title}>{content}</Modal>);

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(content)).toBeInTheDocument();
    });

    it('does not render the modal when isOpen is false', () => {
        render(<Modal isOpen={false} onClose={onClose} title={title}>{content}</Modal>);

        expect(screen.queryByText(title)).not.toBeInTheDocument();
        expect(screen.queryByText(content)).not.toBeInTheDocument();
    });

    it('calls onClose when the close button is clicked', () => {
        render(<Modal isOpen={true} onClose={onClose} title={title}>{content}</Modal>);

        fireEvent.click(screen.getByText('X'));
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});