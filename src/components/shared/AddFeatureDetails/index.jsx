import { TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import RichTextEditor from '../RichTextEditor';
import { RHFTextField } from '../../../hooks/hook-form';

const AddFeatureDetails = () => {
  const { control } = useFormContext();
  return (
    <div className='bg-secondary__fill h-full w-34 mt-4 p-8 rounded-lg'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col items-start'>
          <div className='mb-3'>
            <Typography variant='cardDescription'>
              Feature Name&nbsp;<span className='text-danger'>*</span>
            </Typography>
          </div>
          <RHFTextField
            name='name'
            placeholder='Enter feature name'
            type='text'
            fullWidth
            required
          />
        </div>
        <div className='flex flex-col items-start'>
          <div className='mb-3'>
            <Typography variant='cardDescription'>
              Total Amount&nbsp;<span className='text-danger'>*</span>
            </Typography>
          </div>
          <RHFTextField
            placeholder='Enter Total Amount'
            type='text'
            fullWidth
            name='total_amount'
            required
            pattern={/^[0-9]*$/}
          />
        </div>
      </div>
      <div className='flex flex-col mt-10 '>
        <div className='mb-3 text-start'>
          <Typography variant='cardDescription'>
            Description<span className='text-red-500'>*</span>
          </Typography>
        </div>
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <RichTextEditor value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
    </div>
  );
};

export default AddFeatureDetails;
