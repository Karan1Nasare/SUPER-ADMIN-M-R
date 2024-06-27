import React from 'react';
import { Button, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const CarouselItem = ({ backgroundImage, image }) => (
  <div
    className={`carousel-item bg-blue-900 rounded-xl overflow-hidden shadow-lg p-8`}
  >
    <div className='relative rounded-xl group'>
      <img
        className='w-full h-48 object-cover rounded-lg'
        src={backgroundImage}
        alt='University'
      />
      <div className='absolute inset-0 bg-black opacity-50 rounded-lg group-hover:opacity-75 transition-opacity'></div>
      <div className='absolute inset-0 flex flex-col justify-center items-start p-4 rounded-lg group-hover:opacity-75 transition-opacity'>
        <img
          className='w-12 h-12 mb-4 rounded-full object-cover'
          src={image}
          alt='University Logo'
        />
        <Typography variant='description' className='text-start'>
          The Gujarat University is a public state university located at
          Ahmedabad, Gujarat, India.
        </Typography>
        <Button
          variant='contained'
          className='bg-white text-black'
          sx={{
            fontSize: '0.65rem',
            backgroundColor: 'white',
            color: 'black',
            '&:hover': { backgroundColor: 'primary', color: 'white' },
          }}
        >
          Know More
        </Button>
      </div>
      <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity'>
        <VisibilityIcon className='text-white' style={{ fontSize: '3rem' }} />
      </div>
    </div>
  </div>
);

export default CarouselItem;
