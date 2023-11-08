import { render, screen, fireEvent } from '@testing-library/react';
import Select from '.';
import '@testing-library/jest-dom';

describe('Select Component', () => {
    const selectProps = {
        label: 'Test Select',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
        onChange: jest.fn(),
    };

    it('renders the select with the correct label', () => {
        render(<Select {...selectProps} />);
        expect(screen.getByText(selectProps.label)).toBeInTheDocument();
    });

    it('renders all options', () => {
        render(<Select {...selectProps} />);
        selectProps.options.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    it('calls onChange when an option is selected', () => {
        const selectId = 'my-select'; // Isso é apenas para o teste
        render(<Select id={selectId} {...selectProps} />);
        const selectElement = screen.getByRole('combobox');
        fireEvent.change(selectElement, { target: { value: selectProps.options[1].value } });
        expect(selectProps.onChange).toHaveBeenCalledWith(expect.anything());
    });
});