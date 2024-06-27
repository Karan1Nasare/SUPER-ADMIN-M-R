import React from 'react';
import { Typography } from '@mui/material';
import Logo from '../../../assets/logo.svg';

const Layout = () => {
  return (
    <>
      <div className='flex flex-col lg:items-start xl:w-full  md:items-center lg:w-1/2'>
        <img
          className='m-12 flex justify-center sm:w-96 md:w-64 lg:m-10'
          src={Logo}
          alt='Logo'
        />
        <div className=' items-center text-start justify-center md:items-center 2xl:w-[60%] xl:w-[80%] md:w-96 lg:ml-10 text-white m-12 xl:mt-28 lg:mt-40 2xl:mt-56'>
          <Typography variant='title' className='text-start font-bold'>
            M&R&apos;s Seamless Control Hub
          </Typography>
          <br />
          <Typography className='text-base lg:text-lg'>
            M&R Education offers a robust Admin Panel, granting schools and
            colleges complete control over student management, exam creation,
            and more. Streamline administrative tasks for enhanced efficiency in
            academic oversight.
          </Typography>
        </div>
      </div>
    </>
  );
};
export default Layout;
