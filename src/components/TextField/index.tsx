// TextField.tsx

import React from 'react';
import { TextFieldProps } from './TextField.types';

const TextField: React.FC<TextFieldProps> = ({
    id,
    name,
    placeholder,
    value,
    onChange,
    type = 'text',
    label,
}) => {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
                    {label}
                </label>
            )}
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};

export default TextField;
