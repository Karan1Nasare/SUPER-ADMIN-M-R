import { Stack } from '@mui/material';
import React from 'react';
import TabTitle from '../../shared/TabTitle';

const AdminDetailInfo = ({ admin }) => {
  return (
    <>
      <Stack sx={{ margin: '20px 0' }}>
        <TabTitle title={admin?.name} />
      </Stack>
      <Stack
        sx={{
          maxWidth: '180px',
          maxHeight: '180px',
          height: '100%',
          minHeight: '180px',
          minWidth: '180px',
          width: '100%',
          background: theme => theme.color.secondary__fill,
          padding: '15px',
          border: theme => `1px solid ${theme.color.border_color}`,
          borderRadius: '8px',
        }}
      >
        <img
          src={admin?.profileImage}
          className='w-full h-full min-h-[150px]'
        />
      </Stack>
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
              Admin Name :
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {admin?.name}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Phone Number:
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {admin?.phone}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Website
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {admin?.website}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              City
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {admin?.city}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              GST Number
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {admin?.gstNo}
            </p>
          </Stack>
        </Stack>
        <Stack spacing={5} sx={{ flex: 1 }}>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Email :
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {admin?.email}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              State
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {admin?.state}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Address
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {admin?.address}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Pincode
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {admin?.pincode}
            </p>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default AdminDetailInfo;
