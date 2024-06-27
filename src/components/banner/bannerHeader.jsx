import { Typography } from '@mui/material';
import React from 'react';

const BannerHeader = ({ bannerTitle }) => {
  return (
    <div className='flex items-center'>
      {' '}
      {/* Flex container */}
      <div className='border-r border-primary h-5'></div> {/* Divider */}
      <Typography variant='h4' className='text-white'>
        {bannerTitle}
      </Typography>
    </div>
  );
};

export default BannerHeader;
