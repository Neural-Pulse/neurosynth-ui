import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from '.';
import '@testing-library/jest-dom';

describe('DatePicker', () => {
    it('renders with the correct initial value', () => {
        const testDate = '2023-01-01';
        render(<DatePicker value={testDate} />);
        expect(screen.getByDisplayValue(testDate)).toBeInTheDocument();
    });

    it('calls onChange with the new date when changed', () => {
        const handleChange = jest.fn();
        const testDate = '2023-01-01';
        const newDate = '2023-01-02';
        render(<DatePicker value={testDate} onChange={handleChange} />);
        fireEvent.change(screen.getByDisplayValue(testDate), { target: { value: newDate } });
        expect(handleChange).toHaveBeenCalledWith(newDate);
    });
});
