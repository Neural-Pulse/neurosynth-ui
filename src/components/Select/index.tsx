import React from 'react';
import { SelectProps } from './Select.types';

const Select: React.FC<SelectProps> = ({ id, label, options, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 font-bold text-neuralpulse-dark">{label}</label>
      <select
        id={id}
        className="border border-neuralpulse-gray rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-neuralpulse-accent shadow-green-glow-md"
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
