import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

import AuthButtonBg from '../../../../assets/auth/buttonBg.svg';

const ForgotPasswordForm = () => {
  return (
    <div className='text-white text-start w-[40%] lg:ml-64'>
      <Typography variant='title' className='text-start block mb-10'>
        Forgot Password
      </Typography>

      <TextField
        autoFocus={true}
        id='email'
        placeholder='Enter your email'
        label=''
        name='email'
        className='underline-border w-full'
        variant='standard'
      />
      <div className='authButton mt-10'>
        <img src={AuthButtonBg} alt='' />
        <Button variant='outline-primary'>Send Link</Button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
