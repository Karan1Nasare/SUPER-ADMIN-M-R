import React from 'react';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import BannerHeader from './bannerHeader';
import UploadImage from '../shared/uploadImage/uploadImage';
import BannerForm from './bannerForm';

const AddBanner = () => {
  return (
    <>
      <div className='text-start flex items-center'>
        <BannerHeader bannerTitle='Add Banner' />
      </div>
      <div className='w-full mt-8'>
        <UploadImage />
        <BannerForm />
        <div className='flex justify-end mt-6'>
          <Button
            variant='contained'
            startIcon={<AddCircleIcon />}
            className='bg-white text-black'
            sx={{
              backgroundColor: 'white',
              color: 'black',
            }}
          >
            Add Banner
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddBanner;
