import { render, screen } from '@testing-library/react';
import Snackbar from '.';
import '@testing-library/jest-dom';

describe('Snackbar', () => {
    jest.useFakeTimers();

    it('renders the snackbar with a message', () => {
        render(<Snackbar message="Test message" />);
        expect(screen.getByText('Test message')).toBeInTheDocument();
    });

    it('automatically disappears after the specified duration', () => {
        const handleClose = jest.fn();
        render(<Snackbar message="Test message" duration={3000} onClose={handleClose} />);
        expect(screen.getByText('Test message')).toBeInTheDocument();
        jest.advanceTimersByTime(3000);
        expect(handleClose).toHaveBeenCalled();
        expect(screen.queryByText('Test message')).not.toBeInTheDocument();
    });
});
