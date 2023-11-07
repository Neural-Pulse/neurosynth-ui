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
                <label htmlFor={id} className="block text-neuralpulse-dark text-sm font-bold mb-2">
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
                className="shadow-green-glow-md appearance-none border rounded-sm w-full py-2 px-3 text-neuralpulse-dark leading-tight focus:outline-none focus:ring-2 focus:ring-neuralpulse-accent focus:border-transparent"
            />
        </div>
    );
};

export default TextField;