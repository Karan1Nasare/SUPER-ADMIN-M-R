import { Avatar, Card, CardContent, Chip, Stack } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import PATH_DASHBOARD from '../../routes/path';

const AdminCard = ({ admin }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex justify-between'>
        <div className='flex'>
          <img
            className='h-14 w-14 rounded-full'
            src={admin?.user_details?.image?.url}
            alt=''
          />
          <div className='text-white ml-3 text-left'>
            <h2 className='text-sm'>{admin.name}</h2>
            <h2 className='text-xs'>{admin.email}</h2>
            <h2 className='text-xs'>{admin.phone}</h2>
          </div>
        </div>
        <span></span>
        <Icon
          icon={'mdi:eye'}
          className='text-white'
          width={25}
          onClick={() => {
            navigate(PATH_DASHBOARD.Admins.view(admin?.id));
          }}
        />
      </div>
      <div className='flex mt-3 justify-between'>
        <div className='text-left'>
          <h2 className='text-grey__primary__light'>Active Org</h2>
          <h2 className='bg-tealGreen__opacity mt-2 text-xs h-5 text-center text-tealGreen rounded-full w-11 bg-opacity-25'>
            {admin.active_org_count}
          </h2>
        </div>
        <div
          className={
            admin.website !== undefined &&
            admin.website !== '' &&
            admin.website !== null
              ? 'text-right'
              : 'text-right d-none'
          }
        >
          <h2 className='text-grey__primary__light'>Website</h2>
          <h2 className='bg-success w-32 truncate rounded-full mt-2 h-5 px-2 text-xs text-center text-wrap text-success bg-opacity-25'>
            {admin.user_details?.website}
          </h2>
        </div>
      </div>
    </>
  );
};

export default AdminCard;
