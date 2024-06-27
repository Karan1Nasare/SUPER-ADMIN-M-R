import React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';

const LanguageHeader = () => {
  return (
    <div className='flex flex-col justify-center p-6 rounded-xl border border-gray-700 border-solid bg-secondary__fill max-md:px-5 text-start'>
      <div className='flex gap-5 items-center max-md:flex-wrap'>
        <div className='flex flex-1 gap-2 items-center max-md:max-w-full'>
          <input
            type='text'
            placeholder='Enter Language'
            className='flex-1 justify-center items-start px-3 py-3.5 rounded border border-gray-700 border-solid text-stone-300 bg-transparent max-md:pr-5 max-md:max-w-full'
          />
          <button className='flex gap-1.5 items-center px-3 py-3.5 text-base text-center whitespace-nowrap bg-white rounded-lg text-secondary__fill max-md:px-5'>
            <IoMdAddCircleOutline />
            <h1>Add</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageHeader;
