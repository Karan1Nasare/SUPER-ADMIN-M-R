import React from 'react';
import { Typography } from '@mui/material';
import addPlanForm from './components/addPlanForm';
import UploadImage from '../shared/uploadImage/uploadImage';

const ManagePlan = () => {
  return (
    <div
      className='w-full'
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '50px',
      }}
    >
      <Typography className='flex align-items-start' variant='mainLayoutTitle'>
        Manage Plan
      </Typography>
      <UploadImage />
      <addPlanForm />
    </div>
  );
};

export default ManagePlan;
