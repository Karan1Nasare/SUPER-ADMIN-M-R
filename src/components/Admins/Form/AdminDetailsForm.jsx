
import React, { useEffect, useState } from 'react';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFormContext } from 'react-hook-form';
import { Autocomplete, Grid, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AdminImageSelect from './AdminImageSelect';
import {
  FormProvider,
  RHFAutocomplete,
  RHFSelect,
  RHFTextField,
} from '../../../hooks/hook-form';
import Button from '../../shared/buttons/Button';
import colors from '../../../theme/colors';
import { useStore } from '../../../store/context-store';
import useFetcher from '../../../hooks/useFetcher';
import { getAllCities, getStates } from '../../../service/admins';
import TextField from '../../shared/input/TextField';

const AdminDetailsForm = ({ setValue, setImageFile, values }) => {
  const [file, setFile] = useState();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [Store, StoreDispatch] = useStore();
  const [states, setState] = useState([]);
  const [cities, setCities] = useState([]);
  const { fetcher } = useFetcher();

  useEffect(() => {
    if (file && file.length > 0) {
      setValue('image', file[0]);
      setImageFile(file[0]);
    } else {
      setValue('image', null);
      setImageFile(null);
    }
  }, [file]);

  useEffect(() => {
    setCities([]);
    if (values?.state) {
      fetcher({
        key: 'get_city',
        executer: () => getAllCities({ state_id: values?.state }),
        onSuccess: res => {
          setCities(res?.data?.data);
          // Uncomment the following line if you need to set a default city value
          // setValue('standard', parseInt(res?.data?.data[0]?.id, 10));
        },
        showSuccessToast: false,
      });
    }
  }, [values?.state]);

  useEffect(() => {
    fetcher({
      key: 'get_state',
      executer: () => getStates(),
      onSuccess: res => {
        setState(res?.data?.data);
        // setValue('standard', parseInt(res?.data?.data[0]?.id, 10));
      },
      showSuccessToast: false,
    });
  }, []);

  return (
    <div className='mt-3'>
      <AdminImageSelect file={file} setFile={setFile} />
      <div className='text-sm w-full mt-5 font-medium text-center bg-[#0B1739] text-gray-500   p-6 rounded-md flex items-center justify-between'>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='name'
              label='Admin Name*'
              placeholder='Enter name'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='email'
              type='email'
              label='Email*'
              placeholder='Enter Email'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='phone_number'
              type='number'
              label='Admin Phone Number*'
              placeholder='Enter Phone Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='gst_number'
              type='text'
              label='GST Number'
              placeholder='Enter GST Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={12}>
            <RHFTextField
              size='small'
              name='website'
              type='text'
              label='Website*'
              placeholder='www.abcorg.com'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <Autocomplete
              freeSolo
              fullWidth
              id='free-solo-2-demo'
              disableClearable
              sx={{
                '& .MuiInputBase-root': {
                  padding: '0px',
                },
                '& .MuiInputBase-input': {
                  border: 'none',
                  padding: '7.5px 13px !important',
                },
              }}
              options={
                states
                  ? states.map(state => ({
                      label: state.name,
                      value: state.id?.toString(),
                    }))
                  : []
              }
              onChange={(event, newValue) => {
                setValue('state', newValue ? newValue.value : null, {
                  shouldValidate: true,
                });
              }}
              renderInput={params => (
                <TextField
                  {...params}
                  label='State'
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Grid>
          <Grid item md={6}>
            <Autocomplete
              freeSolo
              fullWidth
              id='free-solo-2-demo1'
              disableClearable
              sx={{
                '& .MuiInputBase-root': {
                  padding: '0px',
                },
                '& .MuiInputBase-input': {
                  border: 'none',
                  padding: '7.5px 13px !important',
                },
              }}
              options={
                cities
                  ? cities.map(city => ({
                      label: city.name,
                      value: city.id?.toString(),
                    }))
                  : []
              }
              onChange={(event, newValue) => {
                setValue('city', newValue ? newValue.value : null, {
                  shouldValidate: true,
                });
              }}
              renderInput={params => (
                <TextField
                  {...params}
                  label='City'
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='address'
              type='text'
              label='Admin Address*'
              placeholder='814 Howard Street, 120065, India'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='pincode'
              type='text'
              label='Pin code*'
              placeholder='380058'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='password'
              type={showPass ? 'text' : 'password'}
              label='Password*'
              placeholder='814 Howard Street, 120065, India'
              fullWidth
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowPass(!showPass)}
                      edge='end'
                      className='text-white'
                    >
                      {showPass ? (
                        <VisibilityOff className='text-white' />
                      ) : (
                        <Visibility className='text-white' />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='confirmPassword'
              type={showConfirmPass ? 'text' : 'password'}
              label='Confirm Password*'
              placeholder='Enter Confirm Password'
              fullWidth
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      edge='end'
                      className='text-white'
                    >
                      {showConfirmPass ? (
                        <VisibilityOff className='text-white' />
                      ) : (
                        <Visibility className='text-white' />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AdminDetailsForm;
