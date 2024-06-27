import { Typography } from '@mui/material';
import React from 'react';

const HeadSection = ({ title, details }) => {
  return (
    <div className='relative flex flex-col items-start gap-3 w-full'>
      <div className='absolute w-1 h-7 left-0 top-[2px] bg-[#F6B336] rounded-full'></div>
      <h6 className='text-3xl font-bold dark:text-orange ml-2'>{title}</h6>
      <Typography variant='addCourseSubtitle' className='!mb-5'>
        {details}
      </Typography>
    </div>
  );
};

export default HeadSection;
