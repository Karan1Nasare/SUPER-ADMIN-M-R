import React, { useState } from 'react';

import { Icon } from '@iconify/react';

const NotificationSearch = ({ value, onChange, handleAddNotification }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    onChange(e.target.value);
    setInputValue(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      onChange(inputValue);
    }
  };
  return (
    <div className='flex gap-5 justify-between p-8 rounded-xl border border-gray-700 border-solid bg-secondary__fill max-md:flex-wrap max-md:px-5'>
      <input
        type='text'
        placeholder='Search Name, Enrollment, Standard'
        className='w-80 justify-center items-start self-start px-3 py-3 text-sm leading-5 rounded border border-solid bg-secondary__fill__dark border-gray-700 border-opacity-20 text-white max-md:pr-5'
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />

      <button
        className='flex items-center gap-2.5 px-4 py-2.5 text-base text-center bg-white rounded-lg text-secondary__fill'
        onClick={handleAddNotification}
      >
        <Icon icon='fluent:add-circle-20-regular' />
        <span className='my-auto'>Add Notification</span>
      </button>
    </div>
  );
};

export default NotificationSearch;
