import React, { useState, memo } from 'react';
import { PasswordFieldProps } from './PasswordField.types';

const PasswordField: React.FC<PasswordFieldProps> = ({
    id,
    name,
    placeholder,
    value,
    onChange,
    label,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mb-4">
            {label && <label htmlFor={id} className="block text-neuralpulse-dark mb-2">{label}</label>}
            <div className="relative">
                <input
                    id={id}
                    name={name}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="shadow-green-glow-md appearance-none border rounded-sm w-full py-2 px-3 pr-10 text-neuralpulse-dark leading-tight focus:outline-none focus:ring-2 focus:ring-neuralpulse-accent focus:border-transparent"
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-neuralpulse-dark"
                >
                    {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default memo(PasswordField);
