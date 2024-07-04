import React, { useState, memo } from 'react';
import { DatePickerProps } from './DatePicker.types';

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
    const [date, setDate] = useState(value || new Date().toISOString().slice(0, 10));

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="bg-neuralpulse-gray text-neuralpulse-dark font-bold py-2 px-4 rounded"
        />
    );
};

export default memo(DatePicker);
