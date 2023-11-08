import { render, screen } from '@testing-library/react';
import Warning from '.';
import '@testing-library/jest-dom';

describe('Warning', () => {
    test('renders Warning component with success style', () => {
        const text = 'Success message';
        render(<Warning text={text} variant="success" />);
        const warningElement = screen.getByText(text);
        expect(warningElement).toHaveClass('shadow-success-glow');
    });

    test('renders Warning component with warning style', () => {
        const text = 'Warning message';
        render(<Warning text={text} variant="warning" />);
        const warningElement = screen.getByText(text);
        expect(warningElement).toHaveClass('shadow-warning-glow');
    });

    test('renders Warning component with error style', () => {
        const text = 'Error message';
        render(<Warning text={text} variant="error" />);
        const warningElement = screen.getByText(text);
        expect(warningElement).toHaveClass('shadow-error-glow');
    });

    test('renders with the correct text', () => {
        const text = 'This is a warning message';
        render(<Warning text={text} variant="warning" />);
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});
