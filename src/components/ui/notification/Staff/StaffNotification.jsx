import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Button from '../../../shared/buttons/Button';
import StaffCard from './StaffCard';

function StaffNotification({ closehandler }) {
  const [selectedCards, setSelectedCards] = useState([]);

  const staffdetails = [
    {
      id: 1,
      name: 'John Doe 1',
      email: 'john1@example.com',
      phone: '123456789',
    },
    {
      id: 2,
      name: 'John Doe 2',
      email: 'john2@example.com',
      phone: '987654321',
    },
    {
      id: 3,
      name: 'John Doe 3',
      email: 'john3@example.com',
      phone: '111213141',
    },
    {
      id: 4,
      name: 'John Doe 4',
      email: 'john4@example.com',
      phone: '151617181',
    },
  ];

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
      <section className='flex flex-col px-8 py-7 rounded-3xl border border-gray-700 border-solid bg-slate-900 w-[910px] max-md:px-5'>
        <div className='flex gap-5 text-xl text-white max-md:flex-wrap max-md:max-w-full justify-between'>
          <h1 className='text-left'>Select Student</h1>
          <Icon
            icon='material-symbols-light:close'
            width={24}
            height={24}
            className='cursor-pointer my-auto'
            onClick={closehandler}
          />
        </div>
        <hr className='shrink-0 mt-5 h-px border border-solid bg-slate-500 border-slate-500 max-md:max-w-full' />
        <div className='flex justify-center items-center p-8 mt-8 rounded-xl border border-gray-700 border-solid bg-slate-900 max-md:px-5 max-md:max-w-full'>
          <SearchForm />
          <p className='text-sm leading-5 text-white w-[90px]'>
            {selectedCards.length} Selected
          </p>
          <Button
            sx={{
              backgroundColor: 'white',
              color: 'black',
              width: '93px',
              ml: '10px',
              px: '28px',
              py: '12px',
            }}
          >
            Save
          </Button>
        </div>
        <div className='mt-8 max-md:max-w-full'>
          <div className='flex flex-wrap gap-1 max-md:flex-col max-md:gap-0 overflow-y-scroll h-[250px]'>
            {staffdetails.map(item => (
              <StaffCard key={item.id} staff={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default StaffNotification;

function SearchForm({ handleSelectAll }) {
  return (
    <form className='flex gap-2.5 px-5 max-md:flex-wrap w-full'>
      <label htmlFor='searchInput' className='sr-only'>
        Search
      </label>
      <input
        id='searchInput'
        type='text'
        className='justify-center items-start self-start px-3 py-3 text-sm leading-5 rounded border border-solid bg-slate-900 border-gray-700 border-opacity-20 text-white text-opacity-20 max-md:pr-5'
        placeholder='Search Name, Enrollment, Standard'
        aria-label='Search Name, Enrollment, Standard'
      />
      <Button
        variant='contained'
        sx={{
          backgroundColor: 'secondary.dark',
          color: 'white',
          border: 'none',
          p: 3,
        }}
      >
        <Icon icon='ion:filter' fontSize={'23px'} />
      </Button>
      <div className='flex flex-col justify-center text-sm leading-5 text-white'>
        <Button
          variant='contained'
          sx={{
            backgroundColor: 'secondary.dark',
            color: 'white',
            p: 3,
          }}
        >
          Select All
        </Button>
      </div>
    </form>
  );
}
