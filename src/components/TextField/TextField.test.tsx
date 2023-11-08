import { render, screen, fireEvent } from '@testing-library/react';
import TextField from '.';
import '@testing-library/jest-dom';

describe('TextField', () => {
    test('renders TextField component', () => {
        const handleChange = jest.fn();
        render(<TextField id="test-field" value="test value" name="test" onChange={handleChange} />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('renders with a label when one is provided', () => {
        const label = 'Test Label';
        const handleChange = jest.fn();
        render(<TextField id="test-field" value="test value" label={label} name="test" onChange={handleChange} />);
        expect(screen.getByLabelText(label)).toBeInTheDocument();
    });

    test('calls onChange when text is entered', () => {
        const handleChange = jest.fn();
        render(<TextField id="test-field" value="test value" name="test" onChange={handleChange} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'new value' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('displays the correct placeholder text', () => {
        const placeholder = 'Enter text here';
        const handleChange = jest.fn();
        render(<TextField id="test-field" value="test value" name="test" placeholder={placeholder} onChange={handleChange} />);
        expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });

    test('has the correct value when provided', () => {
        const value = 'Current Value';
        render(<TextField id="test-field" name="test" value={value} onChange={() => { }} />);
        expect(screen.getByRole('textbox')).toHaveValue(value);
    });
});