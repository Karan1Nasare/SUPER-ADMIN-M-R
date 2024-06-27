import React from 'react';

import '../layout.css';

import LoginBgImage from '../../../../assets/auth/Login.svg';
import Layout from '../layout';
import OTPForm from './otpForm';

const OTP = () => {
  return (
    <div className='relative flex h-screen w-screen'>
      <img
        className='absolute inset-0 w-full h-full object-cover'
        src={LoginBgImage}
        alt='Background'
      />

      <div className='absolute inset-0 flex flex-col lg:flex-row p-4 lg:p-8 w-full'>
        {/* Left Side Container  */}
        <Layout />

        {/* Right Side Container */}
        <div className='flex justify-center  items-center w-full  mt-12 lg:mt-0'>
          <OTPForm />
        </div>
      </div>
    </div>
  );
};

export default OTP;
