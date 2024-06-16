import React from 'react';
import { SelectProps } from './Select.types';

const Select: React.FC<SelectProps> = ({
  id,
  label,
  options,
  theme,
  labelClass = '',
  selectClass = '',
  ...rest
}) => {
  const defaultTheme = {
    labelColor: 'text-neuralpulse-dark',
    borderColor: 'border-neuralpulse-gray',
    focusRingColor: 'focus:ring-neuralpulse-light-green',
    shadow: 'shadow-green-glow-md',
  };

  const combinedTheme = { ...defaultTheme, ...theme };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={`${combinedTheme.labelColor} mb-2 font-bold ${labelClass}`}>
        {label}
      </label>
      <select
        id={id}
        className={`border p-2 focus:outline-none ${combinedTheme.borderColor} ${combinedTheme.focusRingColor} ${combinedTheme.shadow} ${selectClass}`}
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