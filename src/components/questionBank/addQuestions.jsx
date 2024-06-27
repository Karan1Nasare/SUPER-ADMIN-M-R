import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';

const AddQuestions = () => {
  return (
    <div className='text-white w-[74%]'>
      <div className='flex'>
        <div className='hover:text-yellow-700 hover:underline flex mr-4'>
          <span className='mt-1 mr-2'>
            <FaRegUserCircle />
          </span>
          <h1 className='mb-2'>Basic Info</h1>
        </div>
        <div className='hover:text-yellow-700 hover:underline flex'>
          <span className='mt-1 mr-2'>
            <IoMdAddCircleOutline />
          </span>
          <h1>Add Questions</h1>
        </div>
      </div>
      <div className='p-6 rounded-md mt-6 bg-secondary__fill'>
        <h3 className='mb-2 text-left'>Exam Title</h3>
        <div className='flex'>
          <input
            className='h-8 border text-sm bg-secondary__fill border-gray-600 rounded-md w-[100%]'
            type='text'
            placeholder='  Enter Exam Title'
          />
        </div>
        <h3 className='mt-6 mb-2 text-left'>Description</h3>
        <div className='flex'>
          <input
            className='h-28 text border  text-sm bg-secondary__fill border-gray-600 rounded-md w-[100%]'
            type='text'
            placeholder='  Enter Description'
          />
        </div>
        <div className='flex justify-between'>
          <div className='text-left mr-6'>
            <h1 className='mt-6 mb-2 text-left'>Select Standard</h1>
            <div className='h-8 border text-sm w-96 bg-secondary__fill flex justify-between border-gray-600 rounded-md'>
              <input
                className='mt-1 bg-secondary__fill'
                type='text'
                placeholder='  Select Standard'
              />
              <span className=''>
                <RiArrowDropDownLine style={{ fontSize: '2rem ' }} />
              </span>
            </div>
          </div>
          <div className='text-left'>
            <h1 className='mt-6 mb-2 text-left'>Select Subject</h1>
            <div className='h-8 border text-sm w-96 bg-secondary__fill flex justify-between border-gray-600 rounded-md'>
              <input
                className='mt-1 bg-secondary__fill'
                type='text'
                placeholder='  Select Subject'
              />
              <span className=''>
                <RiArrowDropDownLine style={{ fontSize: '2rem ' }} />
              </span>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='text-left'>
            <h1 className='mt-6 mb-2 text-left'>Select Chapter</h1>
            <div className='h-8 border text-sm w-96 bg-secondary__fill flex justify-between border-gray-600 rounded-md'>
              <input
                className='mt-1 bg-secondary__fill'
                type='text'
                placeholder='  Select Chapter'
              />
              <span className=''>
                <RiArrowDropDownLine style={{ fontSize: '2rem ' }} />
              </span>
            </div>
          </div>
          <div className='text-left'>
            <h1 className='mt-6 mb-2 text-left'>Select Topic</h1>
            <div className='h-8 border text-sm w-96 bg-secondary__fill flex justify-between border-gray-600 rounded-md'>
              <input
                className='mt-1 bg-secondary__fill'
                type='text'
                placeholder='  Select Topic'
              />
              <span className=''>
                <RiArrowDropDownLine style={{ fontSize: '2rem ' }} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex mt-4 justify-between'>
        <button className='rounded-md bg-white w-24 h-8 text-black'>
          Previous
        </button>
        <button className='rounded-md bg-white w-16 h-8 text-black'>
          Next
        </button>
      </div>
    </div>
  );
};
export default AddQuestions;
