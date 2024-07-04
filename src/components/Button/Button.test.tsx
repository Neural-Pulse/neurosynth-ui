import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';
import '@testing-library/jest-dom';

describe('Button', () => {
    const label = 'Click Me';
    const handleClick = jest.fn();

    it('renders with the correct label', () => {
        render(<Button label={label} variant='contained' onClick={handleClick} />);
        expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
    });

    it('calls the onClick handler when clicked', () => {
        render(<Button label={label} variant='contained' onClick={handleClick} />);
        fireEvent.click(screen.getByText(label));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('has the correct class for the contained variant', () => {
        render(<Button label={label} onClick={handleClick} variant="contained" />);
        expect(screen.getByText(label)).toHaveClass('bg-neuralpulse-green');
        expect(screen.getByText(label)).toHaveClass('text-white');
        expect(screen.getByText(label)).toHaveClass('hover:bg-neuralpulse-gray');
    });

    it('has the correct class for the outlined variant', () => {
        render(<Button label={label} onClick={handleClick} variant="outlined" />);
        expect(screen.getByText(label)).toHaveClass('border');
        expect(screen.getByText(label)).toHaveClass('hover:bg-neuralpulse-green');
    });

    it('has the correct class for the text variant', () => {
        render(<Button label={label} onClick={handleClick} variant="text" />);
        expect(screen.getByText(label)).toHaveClass('text-neuralpulse-green');
        expect(screen.getByText(label)).toHaveClass('hover:bg-neuralpulse-gray');
    });
});
