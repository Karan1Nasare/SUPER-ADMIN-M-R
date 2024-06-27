import * as React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';

const EditCard = ({ isEdit }) => {
  const handleClick = () => {
    isEdit(false);
  };
  return (
    <div className='flex absolute shadow-full ml-[32%] flex-col px-8 py-7 text-sm text-white rounded-3xl border border-gray-700 border-solid bg-secondary__fill max-w-[673px] max-md:px-5'>
      <div className='flex gap-5 text-xl max-md:flex-wrap max-md:max-w-full'>
        <h1 className='flex-auto text-left my-auto'>Edit Academic Year</h1>
        <span onClick={handleClick} className='shrink-0 aspect-square w-[30px]'>
          <IoCloseOutline />
        </span>
      </div>
      <div className='shrink-0 mt-5 h-px border border-solid bg-slate-500 border-slate-500 max-md:max-w-full' />
      <input
        className='bg-secondary__fill items-start text-left  px-3 py-3.5 mt-11 whitespace-nowrap rounded border border-gray-700 border-solid max-md:pr-5 max-md:mt-10 max-md:max-w-full'
        type='text'
        placeholder='Aklavya'
      />
      {/* <div className='flex gap-5 justify-between mt-5 whitespace-nowrap max-md:flex-wrap'>
        <div className='flex gap-4 justify-between px-3 py-2.5 rounded border border-gray-700 border-solid'>
          <div className='my-auto'>yyyy-mm-dd</div>
          <span className='shrink-0 w-6 aspect-square'>
            <SlCalender />
          </span>
        </div>
        <div className='flex gap-4 justify-between px-3 py-2.5 rounded border border-gray-700 border-solid'>
          <div className='my-auto'>yyyy-mm-dd</div>
          <span className='shrink-0 w-6 aspect-square'>
            <SlCalender />
          </span>
        </div>
      </div> */}
      <div
        onClick={handleClick}
        className='justify-center self-center px-7 py-3 mt-8 text-base text-center whitespace-nowrap bg-white rounded-lg text-slate-900 max-md:px-5'
      >
        Update
      </div>
    </div>
  );
};
export default EditCard;
