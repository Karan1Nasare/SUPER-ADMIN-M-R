import React from 'react';
import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

const AddVideoCard = ({ title, onSubmit }) => {
  return (
    <div
      className='relative h-[208px] cursor-pointer bg-transparent flex justify-center items-center rounded-md'
      onClick={onSubmit}
    >
      <svg className='absolute top-0 left-0 w-full h-full'>
        <rect
          x='0'
          y='0'
          width='100%'
          height='100%'
          fill='none'
          stroke='white'
          strokeDasharray='9 9'
          strokeWidth='2'
          rx='6'
          ry='6'
        />
      </svg>
      <div className='relative z-10 flex justify-center flex-col items-center'>
        <Icon
          icon='material-symbols:add-circle-rounded'
          fontSize={40}
          style={{ marginBottom: '20px' }}
        />
        <p>
          <Typography variant='materialAddContentPlaceholder'>
            {title}
          </Typography>
        </p>
      </div>
    </div>
  );
};

export default AddVideoCard;
