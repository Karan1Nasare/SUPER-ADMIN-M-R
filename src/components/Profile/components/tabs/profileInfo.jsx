import { Stack } from '@mui/material';
import React from 'react';
import TabTitle from '../../../shared/TabTitle';
import Button from '../../../shared/buttons/Button';
import UpdateAccountField from './updateAccountField';

const ProfileInfo = ({ profileData }) => {
  // Call Update Api Here
  const handleUpdateUserName = data => {
    console.debug('update user name', data);
  };

  const handleUpdatePassword = data => {
    console.debug('update password', data);
  };

  const handleUpdateEmail = data => {
    console.debug('update email', data);
  };

  const handleUpdatePhone = data => {
    console.debug('update mobile', data);
  };

  return (
    <>
      <Stack sx={{ margin: '20px 0' }}>
        <TabTitle title={'Org Account Info'} />
      </Stack>
      <Stack>
        {/* Update User Name */}
        <UpdateAccountField
          label={'Username'}
          value={profileData?.username}
          formFields={[
            {
              label: 'Username',
              name: 'username',
              type: 'text',
              placeholder: 'Enter your username',
              value: profileData?.username,
              required: true,
            },
          ]}
          handleUpdate={handleUpdateUserName}
        />
        {/* Update Password */}
        <UpdateAccountField
          label={'Password'}
          value={profileData?.password}
          formFields={[
            {
              label: 'Current Password*',
              name: 'current_password',
              type: 'text',
              placeholder: 'Enter Current Password',
              value: '',
              required: true,
            },
            {
              label: 'New Password*',
              name: 'new_password',
              type: 'text',
              placeholder: 'Enter New Password',
              value: '',
              required: true,
            },
            {
              label: 'New Confirm Password*',
              name: 'new_confirm_password',
              type: 'text',
              placeholder: 'New Confirm Password',
              value: '',
              required: true,
            },
          ]}
          isPassword={true}
          handleUpdate={handleUpdatePassword}
        />
        {/* Update Phone Number : */}
        <UpdateAccountField
          label={'Phone Number'}
          value={profileData?.phone_number}
          formFields={[
            {
              label: 'Phone Number',
              name: 'phone_number',
              type: 'text',
              placeholder: 'Enter Phone Number',
              value: profileData?.phone_number,
              required: true,
            },
          ]}
          handleUpdate={handleUpdatePhone}
        />
        {/* Update Email */}
        <UpdateAccountField
          label={'Email'}
          value={profileData?.email}
          formFields={[
            {
              label: 'Email',
              name: 'email',
              type: 'text',
              placeholder: 'Enter your Email',
              value: profileData?.email,
              required: true,
            },
          ]}
          handleUpdate={handleUpdateEmail}
        />
      </Stack>
    </>
  );
};

export default ProfileInfo;
