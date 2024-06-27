import React from 'react';
import SelectMultipleOptions from './selectMultipleOptions';
import SelectDateComponent from './selectDateComponent';

const FilterCard = ({
  filterOptions,
  filterTitle,
  dateOptions,
  dateTitle,
  onClose,
  open,
}) => {
  return (
    <div className='flex flex-col p-8 rounded-3xl border border-gray-700 border-solid bg-secondary__fill max-w-[673px] max-md:px-5'>
      <div className='flex gap-5 justify-between text-xl text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full'>
        <div className='my-auto'>Filter</div>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/8a44e7650b31fac52ac72689d9f496129d0e75f353566f0862933c88b9063426?'
          className='shrink-0 aspect-square w-[30px]'
          onClick={onClose}
        />
      </div>
      <div className='shrink-0 mt-5 h-px border border-solid bg-slate-500 border-slate-500 max-md:max-w-full' />
      <SelectMultipleOptions
        filterOptions={filterOptions}
        filterTitle={filterTitle}
      />
      <SelectDateComponent dateOptions={dateOptions} dateTitle={dateTitle} />
      <div className='flex flex-col items-center  py-9 mt-5 rounded-lg bg-secondary__fill max-md:px-5 max-md:max-w-full'></div>
      <div className='flex flex-col justify-center items-end  mt-8 text-base text-center text-white whitespace-nowrap max-md:pl-5 max-md:max-w-full'>
        <div className='flex gap-3.5'>
          <div className='justify-center px-7 py-3 rounded-md border border-gray-700 border-solid bg-secondary__fill max-md:px-5'>
            Reset
          </div>
          <div className='justify-center px-7 py-3 bg-orange-400 rounded-lg max-md:px-5'>
            Filter
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
