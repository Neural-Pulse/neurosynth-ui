import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '.';

describe('SearchBar', () => {
    const defaultProps = {
        value: '',
        onChange: jest.fn(),
        onSearch: jest.fn(),
        placeholder: 'Search...',
    };

    it('renders the search bar with the provided props', () => {
        render(<SearchBar {...defaultProps} />);
        const inputElement = screen.getByPlaceholderText('Search...');
        expect(inputElement).toBeInTheDocument();
    });

    it('calls onChange when the input value changes', () => {
        render(<SearchBar {...defaultProps} />);
        const inputElement = screen.getByPlaceholderText('Search...');
        fireEvent.change(inputElement, { target: { value: 'test' } });
        expect(defaultProps.onChange).toHaveBeenCalledWith('test');
    });

    it('calls onSearch when the enter key is pressed', () => {
        render(<SearchBar {...defaultProps} />);
        const inputElement = screen.getByPlaceholderText('Search...');
        fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });
        expect(defaultProps.onSearch).toHaveBeenCalled();
    });
});
