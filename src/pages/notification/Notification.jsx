import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify';
import Button from '../../components/shared/buttons/Button';
import NotificationCard from '../../components/shared/Notification/NotificationCard';

const Notification = () => {
  const navigate = useNavigate();
  const [notification, setaddnotification] = useState(false);
  const handleaddnotification = () => {
    navigate('/notification/add');
  };
  return (
    <>
      <div
        className='w-full'
        style={{
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden', // Disable container-level overflow
          padding: 2, // Add padding to ensure content is not cut off
        }}
      >
        <div className='w-max mb-6'>
          <h2 className="text-white text-[32px] font-normal font-['Helvetica'] text-left">
            Notification
          </h2>
        </div>
        <section className='flex gap-5 p-[30px] rounded-xl border border-gray-700 border-solid bg-slate-900 max-md:flex-wrap max-md:px-5'>
          <SearchInput />
          {notification && (
            <select className="bg-slate-900 text-white p-3 rounded-md text-sm font-['Helvetica'] font-normal border border-[#343B4F]">
              <option>Select</option>
              <option>Select Subject</option>
              <option>Select Subject</option>
            </select>
          )}

          <Button
            sx={{ width: '179px', p: '9px', backgroundColor: 'white' }}
            onClick={handleaddnotification}
            startIcon={<Icon icon={'gala:add'} />}
          >
            Add Notification
          </Button>
        </section>
        <div className='grid grid-cols-2 gap-8 overflow-y-auto mt-2 py-4'>
          <>
            <NotificationCard />
            <NotificationCard />
          </>
        </div>
      </div>
    </>
  );
};

export default Notification;

function SearchInput() {
  return (
    <div className='flex flex-1 gap-2.5 pr-20 max-md:flex-wrap max-md:max-w-full'>
      <label htmlFor='searchInput' className='sr-only'>
        Search
      </label>
      <input
        type='text'
        id='searchInput'
        className='justify-center items-start self-start px-3 py-3 text-sm leading-5 rounded border border-solid bg-slate-900 border-gray-700 border-opacity-20 text-white text-opacity-20 max-md:pr-5'
        placeholder='Search Name, Enrollment, Standard'
        aria-label='Search Name, Enrollment, Standard'
      />
      <div
        tabIndex='0'
        role='button'
        className='flex justify-center items-center px-2.5 w-11 h-11 rounded border border-solid bg-slate-900 border-gray-700 border-opacity-20'
        onClick={() => {
          document.getElementById('searchInput').focus();
        }}
      >
        <img
          alt='Search Icon'
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/7b5e15531bb83a15e880bc93e8212046ef6cc457d9db49d36a9d6af588e92ead?apiKey=33d350ef18e9405bbdd3cdc1375c0c2b&'
          className='w-6 aspect-square'
        />
      </div>
    </div>
  );
}
