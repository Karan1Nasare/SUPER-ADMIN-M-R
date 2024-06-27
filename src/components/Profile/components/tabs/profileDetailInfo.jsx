import { Stack, Box, Grid } from '@mui/material';
import React from 'react';
import TabTitle from '../../../shared/TabTitle';
import ActiveInfoCard from './activeInfoCard';

const ProfileDetailInfo = ({ profileData }) => {
  return (
    <>
      <Stack
        sx={{
          background: theme => theme.color.secondary__fill,
          padding: '20px',
          border: theme => `1px solid ${theme.color.border_color}`,
          borderRadius: '8px',
          marginTop: '10px',
          width: '100%',
        }}
        direction={'row'}
      >
        <Stack spacing={5} sx={{ flex: 1 }}>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Org Name :
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {profileData?.name}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Org Person Name :
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {profileData?.name}
            </p>
          </Stack>

          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Alternative Phone Number
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {profileData?.AlternativePhone || 'N/A'}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              State
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {profileData?.state}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Address
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {profileData?.address}
            </p>
          </Stack>
        </Stack>
        <Stack spacing={5} sx={{ flex: 1 }}>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Email :
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {profileData?.email}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Phone Number:
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {profileData?.phone_number}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Website
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {profileData?.website || 'N/A'}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              City
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {profileData?.city}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Pincode
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {profileData?.pincode}
            </p>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ProfileDetailInfo;
