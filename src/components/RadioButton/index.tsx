import React from 'react';
import { RadioButtonProps } from './RadioButton.types';

const RadioButton: React.FC<RadioButtonProps> = ({ id, name, label, checked, onChange }) => {
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span className={`inline-block p-2 rounded-full mr-2 ${checked ? 'bg-neuralpulse-green' : 'bg-neuralpulse-gray'}`}></span>
      {label}
    </label>
  );
};

export default RadioButton;