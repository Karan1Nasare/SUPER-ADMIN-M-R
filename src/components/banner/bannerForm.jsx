import React from 'react';
import { TextField, Button } from '@mui/material';
import { borderColor } from '@mui/system';

const BannerForm = () => {
  return (
    <div className='bg-darkBlue p-6 rounded-lg shadow-lg  mt-6'>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='text-white text-start mb-2 block'>
            Enter Title
          </label>
          <TextField
            variant='outlined'
            placeholder='Enter Staff Full Name'
            fullWidth
            InputProps={{
              style: {
                color: 'white',
              },
              classes: {
                notchedOutline: 'border-none',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
          />
        </div>
        <div>
          <label className='text-white text-start mb-2 block'>
            Read More Button Link
          </label>
          <TextField
            variant='outlined'
            placeholder='Enter Staff Email'
            fullWidth
            sx={{ borderColor: '#869ab8' }}
          />
        </div>
      </div>
      <div className='mb-4'>
        <label className='text-white text-start mb-2 block'>
          Description<span className='text-red-500'>*</span>
        </label>
        <textarea
          placeholder='Enter Description...'
          className='w-full h-32 p-3 rounded-lg bg-darkBlue text-white border border-gray-600 focus:outline-none focus:border-white'
        ></textarea>
      </div>
    </div>
  );
};

export default BannerForm;
