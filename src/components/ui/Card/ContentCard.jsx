/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Stack } from '@mui/material';
import DefaultImage from '../../../assets/adminProfile.png';

function Image({ src, alt, className }) {
  return <img loading='lazy' src={src} alt={alt} className={className} />;
}

const ContentCard = props => {
  const { data, editHandler, deleteHandler, viewHandler, image } = props;
  return (
    <>
      <Stack
        sx={{ width: '100%' }}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Stack direction={'row'} spacing={3}>
          <div className='w-55 h-55'>
            <img
              loading='lazy'
              src={data?.image?.url || DefaultImage}
              alt='course'
              className='shrink-0 aspect-square w-[60px] rounded-md'
            />
          </div>

          <Stack direction={'column'}>
            <h1 className='text-lg text-left font-semibold text-white'>
              {data?.name}
            </h1>
            <time className='flex  text-sm leading-5 text-gray-400'>
              <Icon icon='ph:calendar-bold' width={20} />
              <span>{data?.created_at}</span>
            </time>
          </Stack>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <Icon
            icon='mdi:eye'
            width={20}
            onClick={() => viewHandler(data)}
            className='text-white cursor-pointer'
          />
          <FaRegEdit
            className='text-white cursor-pointer shrink-0 self-start w-5 aspect-square'
            onClick={() => editHandler(data)}
          />
          <FiTrash2
            className='text-red-600 cursor-pointer shrink-0 self-start w-5 aspect-square'
            onClick={() => deleteHandler(data)}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default ContentCard;
