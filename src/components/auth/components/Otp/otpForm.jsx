import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import AuthButtonBg from '../../../../assets/auth/buttonBg.svg';

const OTPForm = () => {
  const [otpValues, setOtpValues] = useState(Array(6).fill(''));

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newValues = [...otpValues];
      newValues[index] = value;
      setOtpValues(newValues);

      // Move to the next input field if a number is entered
      if (value && index < newValues.length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };
  return (
    <div className='text-white  lg:ml-80'>
      <Typography variant='title' className='text-start block mb-10'>
        Enter OTP
      </Typography>
      <Typography variant='subTitle' className='text-start block mb-10'>
        We have sent OTP on your register mobile number
      </Typography>

      <div className='text-start mt-6'>
        <Grid container spacing={3}>
          {otpValues.map((value, index) => (
            <Grid item key={index}>
              <TextField
                id={`otp-input-${index}`}
                variant='standard'
                size='small'
                type='text'
                value={value}
                onChange={e => handleChange(index, e.target.value)}
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: 'center',
                    fontSize: 20,
                    letterSpacing: '0.5rem',
                    width: 50,
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Typography variant='ui02' className='text-start block'>
        00.33 sec
      </Typography>
      <div className='authButton'>
        <img src={AuthButtonBg} alt='button' />
        <Button variant='outline-primary'>Verify</Button>
      </div>
    </div>
  );
};

export default OTPForm;
