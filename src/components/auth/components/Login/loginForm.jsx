/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Password } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AuthButtonBg from '../../../../assets/auth/buttonBg.svg';
import { APIClient, APIClient2 } from '../../../../utilities/axios-client';
import { useStore } from '../../../../store/context-store';
import useFetcher from '../../../../hooks/useFetcher';
import { getRouteByName } from '../../../../App.routes';
import URLS from '../../../../constants/api';

const LoginForm = () => {
  const { API } = APIClient();
  const { axiosInstance } = APIClient2();
  const [Store, StoreDispatch] = useStore();
  const [responseErr, setResponseErr] = useState('');
  const navigate = useNavigate();
  const loginSchema = object({
    username: string()
      .required('username should not be empty')
      // .username()
      .typeError('Please enter a valid username address'),
    password: string().required('Password should not be empty'),
  });
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm({ resolver: yupResolver(loginSchema) });
  const { fetcher, getExecutorState } = useFetcher();
  const { isLoading } = getExecutorState('login');
  const loginin = async data => {
    return axiosInstance.post(URLS.LOGIN, data);
  };
  const onLoginHandler = async data => {
    fetcher({
      key: 'login',
      executer: () => loginin(data),
      onSuccessRoute: getRouteByName('dashboard')?.route || '/',
      onSuccess: response => {
        StoreDispatch({ type: 'Login', user: response.data.data });
      },
    });
    // try {
    //   const response = await API('POST', URLS.LOGIN, data, false);
    //   console.log('response', response);
    //   if (response.status !== 200) {
    //     throw response;
    //   }
    //   StoreDispatch({ type: 'Login', user: response.data.data });
    //   navigate(getRouteByName('dashboard')?.route || '/');
    //   console.log(response);
    // } catch (err) {
    //   setResponseErr(err?.response?.data?.message || err);
    //   console.log('error: ', err);
    // }
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = e => {
    e.preventDefault();
  };
  return (
    <div className='text-white md:w-[40%] lg:w-[50%] lg:ml-64'>
      <form onSubmit={handleSubmit(onLoginHandler)}>
        <Typography variant='title' className='text-start block mb-10'>
          Login to Continue
        </Typography>
        <div className='text-start mt-6 mb-6'>
          <div className='lg:mb-6'>
            <TextField
              placeholder='UserName (Required)'
              label=''
              className='underline-border w-full'
              variant='standard'
              {...register('username')}
            />
          </div>
          <div className='bg-secondary__fill mt-2 rounded-md border border-gray-700 '>
            <TextField
              name='password'
              placeholder='Password (Required)'
              label=''
              className='underline-border w-full'
              variant='outlined'
              {...register('password')}
              id='standard-adornment-password'
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position='end'
                    sx={{ border: 'none', marginRight: '0' }}
                  >
                    <IconButton
                      style={{ color: 'white' }}
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  '&.MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent',
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'transparent',
                    },
                    '& .MuiInputBase-input': {
                      border: 'none', // Specifically target the right border of the input
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <p>{errors?.username?.message}</p>
        <p>{errors?.password?.message}</p>
        <div className='authButton mt-10'>
          <img src={AuthButtonBg} alt='button' />
          <Button variant='outline-primary' type='submit' disabled={isLoading}>
            Log In
          </Button>
        </div>
        {responseErr && (
          <Typography variant='h6' sx={{ mt: 10 }}>
            {responseErr}
          </Typography>
        )}
      </form>
    </div>
  );
};
export default LoginForm;
