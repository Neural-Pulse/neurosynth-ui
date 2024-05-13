// Select.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Select from './';

describe('Select Component', () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

    it('renders with label and options', () => {
        render(<Select id="test-select" label="Test Select" options={options} />);
        expect(screen.getByText('Test Select')).toBeInTheDocument();
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('applies custom theme styles', () => {
        const customTheme = {
            labelColor: 'text-blue-500',
            borderColor: 'border-red-500',
            focusRingColor: 'focus:ring-yellow-500',
            shadow: 'shadow-xl'
        };
        render(<Select id="theme-select" label="Theme Select" options={options} theme={customTheme} />);
        const selectElement = screen.getByLabelText('Theme Select');
        expect(selectElement).toHaveClass('border-red-500 focus:ring-yellow-500 shadow-xl');
    });

    it('passes additional props to select element', () => {
        render(<Select id="props-select" label="Props Select" options={options} disabled />);
        const selectElement = screen.getByLabelText('Props Select');
        expect(selectElement).toBeDisabled();
    });

    it('triggers onChange event when option is selected', () => {
        const onChange = jest.fn();
        render(<Select id="change-select" label="Change Select" options={options} onChange={onChange} />);
        fireEvent.change(screen.getByLabelText('Change Select'), { target: { value: 'option2' } });
        expect(onChange).toHaveBeenCalledWith(expect.anything());
    });

    it('renders with no options if options array is empty', () => {
        render(<Select id="empty-select" label="Empty Select" options={[]} />);
        const selectElement = screen.getByLabelText('Empty Select');
        expect(selectElement).toBeEmptyDOMElement();
    });

    it('can apply custom classes to label and select', () => {
        render(
            <Select
                id="class-select"
                label="Class Select"
                options={options}
                labelClass="text-lg font-bold"
                selectClass="bg-gray-200"
            />
        );
        const label = screen.getByText('Class Select');
        const selectElement = screen.getByLabelText('Class Select');
        expect(label).toHaveClass('text-lg font-bold');
        expect(selectElement).toHaveClass('bg-gray-200');
    });

    // Add more tests as needed
});
