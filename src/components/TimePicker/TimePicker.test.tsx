import { render, screen, fireEvent } from '@testing-library/react';
import TimePicker from '.';
import '@testing-library/jest-dom';

describe('TimePicker', () => {
    it('renders with the correct initial value', () => {
        const testTime = '14:30';
        render(<TimePicker value={testTime} />);
        expect(screen.getByDisplayValue(testTime)).toBeInTheDocument();
    });

    it('calls onChange with the new time when changed', () => {
        const handleChange = jest.fn();
        const testTime = '14:30';
        const newTime = '15:45';
        render(<TimePicker value={testTime} onChange={handleChange} />);
        fireEvent.change(screen.getByDisplayValue(testTime), { target: { value: newTime } });
        expect(handleChange).toHaveBeenCalledWith(newTime);
    });
});
