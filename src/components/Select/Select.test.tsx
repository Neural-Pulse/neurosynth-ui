import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from '.';

describe('Select', () => {
    const selectProps = {
        label: 'Test Select',
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' }
        ],
        onChange: jest.fn()
    };

    it('renders the select with the correct label', () => {
        render(<Select {...selectProps} />);
        expect(screen.getByLabelText(selectProps.label)).toBeInTheDocument();
    });

    it('renders all options', () => {
        render(<Select {...selectProps} />);
        selectProps.options.forEach((option) => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    it('calls onChange when an option is selected', () => {
        render(<Select {...selectProps} />);
        const selectElement = screen.getByLabelText(selectProps.label);
        fireEvent.change(selectElement, { target: { value: 'option2' } });
        expect(selectProps.onChange).toHaveBeenCalledWith(expect.anything());
    });
});