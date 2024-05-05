import React, { useState } from 'react';
import { TimePickerProps } from './TimePicker.types';

const TimePicker: React.FC<TimePickerProps> = ({ value, onChange }) => {
    const [time, setTime] = useState(value || '12:00');

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <input
            type="time"
            value={time}
            onChange={handleTimeChange}
            className="bg-neuralpulse-gray text-neuralpulse-dark font-bold py-2 px-4 rounded"
        />
    );
};

export default TimePicker;
