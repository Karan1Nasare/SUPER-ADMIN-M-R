import React, { useState } from 'react';

const Header = ({ searchValue, setSearchValue }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
    setSearchValue(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      setSearchValue(inputValue);
    }
  };

  return (
    <div className='bg-secondary__fill border mt-4 border-grey__primary__light border-opacity-20 h-24 rounded-md'>
      <div className='flex'>
        <input
          className='bg-blue h-10 opacity-40 text-white rounded-md w-72 ml-6 text-sm mt-7 '
          type='text'
          placeholder='  Search Payment History '
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Call handleKeyPress on key press
        />
      </div>
    </div>
  );
};

export default Header;
