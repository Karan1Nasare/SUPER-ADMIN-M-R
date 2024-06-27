import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { RHFTextField } from '../../../../hooks/hook-form';
import AdminImageSelect from '../../../Admins/Form/AdminImageSelect';

const ProfileDetailsForm = ({ profileData, onUpdate }) => {
  const { setValue, getValues, reset } = useFormContext();
  const [file, setFile] = useState();

  useEffect(() => {
    if (file && file.length > 0) {
      setValue('profilePicture', file[0]);
    } else {
      setValue('profilePicture', null);
    }
  }, [file, setValue]);

  useEffect(() => {
    if (profileData) {
      Object.entries(profileData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [profileData, setValue]);

  const handleSave = () => {
    const formData = getValues();
    console.log('Form Data:', formData);
    // onUpdate(formData);
  };

  const handleCancel = () => {
    reset(profileData);
  };

  return (
    <div className='mt-3'>
      <AdminImageSelect file={file} setFile={setFile} />
      <div className='text-sm w-full mt-5 font-medium text-center bg-[#0B1739] text-gray-500 p-6 rounded-md'>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='name'
              label='Org Name*'
              placeholder='Enter name'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='email'
              type='email'
              label='Email*'
              placeholder='Enter Email'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='phone_number'
              type='number'
              label='Org Phone Number*'
              placeholder='Enter Phone Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='username'
              label='Org Person Name*'
              placeholder='Enter Person Name'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='phone_number'
              type='number'
              label='Org Person Number*'
              placeholder='Enter Person Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='website'
              type='text'
              label='Website*'
              placeholder='www.abcorg.com'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='gst_number'
              type='text'
              label='GST Number'
              placeholder='Enter GST Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='phone_number'
              type='number'
              label='Alternative Phone Number*'
              placeholder='Enter Phone Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='state'
              type='text'
              label='State*'
              placeholder='Gujarat'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='city'
              type='text'
              label='City*'
              placeholder='Gandhinagar'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='address'
              type='text'
              label='Org Address*'
              placeholder='814 Howard Street, 120065, India'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='pincode'
              type='text'
              label='Pin code*'
              placeholder='380058'
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </div>
      <div className='flex justify-end mt-4'>
        <button
          type='submit'
          onClick={handleSave}
          className='flex items-center h-12 px-4 py-2 bg-white text-black rounded transition-colors duration-200 mr-2'
        >
          Save
        </button>
        <button
          type='button'
          onClick={handleCancel}
          className='flex items-center h-12 px-4 py-2 bg-delete text-delete bg-opacity-20 rounded transition-colors duration-200'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProfileDetailsForm;
