import React, { useState } from 'react';

function SelectMultipleOptions({ filterOptions, filterTitle }) {
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);

  const toggleItemSelection = index => {
    if (selectedFilterOptions.includes(index)) {
      setSelectedFilterOptions(
        selectedFilterOptions.filter(itemIndex => itemIndex !== index),
      );
    } else {
      setSelectedFilterOptions([...selectedFilterOptions, index]);
    }
  };

  return (
    <div className='flex flex-col text-white whitespace-nowrap'>
      <div className='w-full text-base max-md:max-w-full text-start mt-8 font-normal '>
        {filterTitle}
      </div>
      <div className='flex gap-4 pr-9 mt-5 text-sm leading-5 text-white max-md:flex-wrap max-md:pr-5'>
        {filterOptions.map((item, index) => (
          <div
            key={index}
            className={`justify-center px-5 py-3 rounded-md border border-gray-700 border-solid ${selectedFilterOptions.includes(index) ? 'text-black bg-white' : 'bg-secondary__fill'}`}
            onClick={() => toggleItemSelection(index)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectMultipleOptions;
