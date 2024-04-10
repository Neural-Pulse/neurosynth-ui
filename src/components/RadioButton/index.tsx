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
      <div className="relative">
        <div className={`w-8 h-8 border border-gray-400 rounded-full mr-2 flex items-center justify-center ${checked ? 'bg-transparent border-transparent' : 'bg-transparent'}`}>
          {checked && <div className="w-4 h-4 bg-neuralpulse-green rounded-full"></div>}
        </div>
      </div>
      <span>{label}</span>
    </label>
  );
};

export default RadioButton;
