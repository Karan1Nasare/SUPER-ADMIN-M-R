/* eslint-disable import/no-cycle */
import React from 'react';
import '../layout.css';
import LoginForm from './loginForm';
import LoginBgImage from '../../../../assets/auth/Login.svg';
import Layout from '../layout';

const Login = () => {
  return (
    <div className='relative flex overflow-x-hidden overflow-y-hidden h-screen w-screen'>
      <img
        className='absolute inset-0 w-full h-full object-cover'
        src={LoginBgImage}
        alt='Background'
      />
      <div className='absolute inset-0 flex flex-col lg:flex-row p-4 lg:p-8 w-full'>
        {/* Left Side Container  */}
        <Layout />
        {/* Right Side Container */}
        <div className='flex justify-center  items-center w-full lg:mt-0'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
