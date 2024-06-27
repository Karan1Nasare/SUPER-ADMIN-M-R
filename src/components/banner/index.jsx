import { Typography, Box, Button } from '@mui/material';
import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardCarousel from '../shared/Carousel/cardCarousel';
import BannerHeader from './bannerHeader';

const Banner = ({ bannerTitle }) => {
  const banner = [
    { buttonTitle: 'Student', bannerTitle: 'Student Banner' },
    { buttonTitle: 'Staff', bannerTitle: 'Staff Banner' },
  ];
  return (
    <div>
      <Typography variant='h2' className='text-start text-white'>
        Banners
      </Typography>
      {banner &&
        banner?.map((section, index) => (
          <div key={index} className='text-start'>
            <div className='flex justify-between'>
              <BannerHeader bannerTitle={section?.bannerTitle} />

              <Button
                variant='contained'
                sx={{
                  color: 'black',
                  backgroundColor: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.25)',
                  height: '2.75rem',
                  width: '13.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                }}
              >
                <AddCircleIcon className='mr-1' style={{ fontSize: '1rem' }} />
                Add Banner for {section?.buttonTitle}
              </Button>
            </div>

            <CardCarousel key={index} />
          </div>
        ))}
    </div>
  );
};

export default Banner;
