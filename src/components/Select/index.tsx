import React from 'react';
import { SelectProps } from './Select.types';

const Select: React.FC<SelectProps> = ({ label, options, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-bold text-dark-gray">{label}</label>
      <select
        className="border border-light-gray rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-cyan-blue"
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