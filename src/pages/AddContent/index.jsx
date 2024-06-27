import { Typography } from '@mui/material';
import React from 'react';
import TabContainer from '../../components/MaterialContent/TabContainer';

const AddContent = () => {
  const contentTabList = [
    {
      id: 1,
      name: 'basicDetails',
      label: 'Basic Details',
      slug: 'basic-details',
      component: '',
    },
    {
      id: 2,
      name: 'video',
      label: 'Video',
      slug: 'video',
      component: '',
    },
    {
      id: 3,
      name: 'images',
      label: 'Images',
      slug: 'images',
      component: '',
    },
    {
      id: 4,
      name: 'basicDetails',
      label: 'Basic Details',
      slug: 'basic-details',
      component: '',
    },
    {
      id: 5,
      name: 'basicDetails',
      label: 'Basic Details',
      slug: 'basic-details',
      component: '',
    },
    {
      id: 6,
      name: 'basicDetails',
      label: 'Basic Details',
      slug: 'basic-details',
      component: '',
    },
  ];
  return (
    <div>
      <div className='flex justify-start items-center'>
        <div className='h-1 w-7 bg-primary rotate-90'></div>
        <Typography variant='h5'>Content</Typography>
      </div>
      <div>
        <TabContainer />
      </div>
      <Typography variant='h5'>Next</Typography>
    </div>
  );
};

export default AddContent;
