import React from 'react';
import { Icon } from '@iconify/react';

const Search = ({ value, onChange }) => {
  return (
    <div className='mt-8 flex flex-col justify-center items-start p-8 text-sm leading-5 rounded-xl border border-gray-700 border-solid bg-secondary__fill text-white text-opacity-20 max-md:px-5'>
      <div className='flex flex-col justify-center px-3 py-3 max-w-full rounded border border-solid bg-secondary__fill border-gray-700 border-opacity-20 w-[558px]'>
        <div className='flex gap-2.5 items-center max-md:flex-wrap'>
          <Icon
            icon={'iconamoon:search-thin'}
            className='text-grey__primary__light'
          />
          <input
            type='text'
            placeholder='Search Name, Enrollment, Standard'
            value={value}
            onChange={onChange}
            className='flex-1 bg-transparent border-none outline-none text-white text-opacity-100 placeholder-gray-400'
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
