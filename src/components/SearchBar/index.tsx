import React, { ChangeEvent } from 'react';
import { SearchBarProps } from './SearchBar.types';
import { FiSearch } from 'react-icons/fi';

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch, placeholder }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className="w-full py-2 pl-10 pr-4 text-neuralpulse-dark bg-neuralpulse-gray border border-neuralpulse-light-green rounded-md focus:outline-none focus:ring-2 focus:ring-neuralpulse-green"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FiSearch className="text-neuralpulse-light-green" />
      </div>
    </div>
  );
};

export default SearchBar;
