import React from 'react';
import { Icon } from '@iconify/react/dist/iconify';
import PlanList from '../../components/Plan/components/Card/PlanList';

const PlanPage = () => {
  return (
    <>
      <div
        className='w-full'
        style={{
          height: '100vh', // Ensure container takes full viewport height
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '50px',
          // Disable container-level overflow
        }}
      >
        <div className='w-max mb-6'>
          <h2 className="text-white text-[32px] font-normal font-['Helvetica'] text-left">
            Plan
          </h2>
        </div>
        <div className='text-sm font-medium text-center bg-[#0B1739] text-gray-500 border border-dropdown__border  p-8 rounded-md flex items-center justify-between'>
          <div>
            <input
              type='text'
              placeholder='Search Name, Enrollment, Standard'
              className='justify-center items-start self-start px-3 py-3  border border-solid bg-secondary__fill__dark border-dropdown__border border-opacity-20  text-white text-opacity-20 w-72 rounded-md'
            />
          </div>
          <button className='btn flex items-center gap-2 p-3 bg-white'>
            <Icon
              icon={'simple-line-icons:plus'}
              className='shrink-0 w-6 aspect-square text-black'
              fontSize={'1.2rem'}
            />
            Add Plan
          </button>
        </div>
        <PlanList />
      </div>
    </>
  );
};

export default PlanPage;
