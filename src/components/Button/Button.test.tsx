import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';


describe('Button Component', () => {
    test('renders the button with the correct label', () => {
        render(<Button label="Click me" variant="primary" onClick={() => { }} />);
        const buttonElement = screen.getByRole('button', { name: 'Click me' });
        expect(buttonElement).toBeInTheDocument();
    });

    test('triggers onClick event when clicked', () => {
        const handleClick = jest.fn();
        render(<Button label="Click me" variant="primary" onClick={handleClick} />);
        const buttonElement = screen.getByRole('button', { name: 'Click me' });
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('renders the primary variant correctly', () => {
        render(<Button label="Primary Button" variant="primary" onClick={() => { }} />);
        const buttonElement = screen.getByRole('button', { name: 'Primary Button' });
        expect(buttonElement).toHaveClass('bg-blue-900 text-white');
    });

    test('renders the secondary variant correctly', () => {
        render(<Button label="Secondary Button" variant="secondary" onClick={() => { }} />);
        const buttonElement = screen.getByRole('button', { name: 'Secondary Button' });
        expect(buttonElement).toHaveClass('bg-cyan-500 text-white');
    });

    test('has the correct default styles', () => {
        render(<Button label="Default Button" variant="primary" onClick={() => { }} />);
        const buttonElement = screen.getByRole('button', { name: 'Default Button' });
        expect(buttonElement).toHaveClass('font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline');
    });
});
