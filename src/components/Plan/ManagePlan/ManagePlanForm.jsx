import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useNavigate } from 'react-router-dom';

import ImageSelection from './From/ImageSelection';
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from '../../../hooks/hook-form';
import RichTextEditor from '../../shared/RichTextEditor';
import colors from '../../../theme/colors';
import Button from '../../shared/buttons/Button';
import useAddPlan from '../hooks/useAddPlan';
import back from '../../Icon/back.svg';

const ManagePlanForm = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [selectFile, setSelectFile] = useState(false); // State for selectFile

  const { onAddPlan } = useAddPlan();

  const schema = zod.object({
    name: zod.string().nonempty('Plan Name Is Required'),
    plan_type: zod.string().nonempty('Plan Type Is Required'),
    plan_status: zod.string().nonempty('Plan Status Is Required'),
    plan_validity: zod.string().nonempty('Plan Validity Is Required'),
    total_amount: zod.string().nonempty('Total Amount Is Required'),
    rate: zod.string().nonempty('Rate Amount Is Required'),
  });

  const defaultValues = {
    name: '',
    plan_type: 'bronze',
    plan_status: 'popular',
    plan_validity: '',
    total_amount: '',
    rate: '',
    description: '',
    gst: '1234dsf4321',
    admin_count: '1',
    organization_count: '',
    staff_count: '',
    student_count: '',
  };

  const methods = useForm({ defaultValues, resolver: zodResolver(schema) });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async data => {
    console.log('🚀 ~ onSubmit ~ data:', data, file, selectFile);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Append the selected file if it exists
    if (file) {
      formData.append('image', file);
    }
    await onAddPlan(formData);
  };

  const handleBackClick = () => {
    navigate('/plan');
  };

  return (
    <div className='w-full pb-9'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className="text-white text-[32px] font-normal font-['Helvetica'] ">
          Manage Plan
        </h2>
        <div
          onClick={handleBackClick}
          className='flex items-center cursor-pointer'
        >
          <img src={back} alt='' className='text-white w-8 h-8 mr-1' />
          <button className='text-white text-2xl'>Back</button>
        </div>
      </div>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <ImageSelection
          file={file}
          setFile={setFile}
          selectFile={selectFile}
          setSelectFile={setSelectFile}
        />
        <div className='text-sm w-full mt-5 font-medium text-center bg-[#0B1739] text-gray-500 border border-dropdown__border  p-6 rounded-md flex items-center justify-between'>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <p className='text-left text-white mb-1'>
                Plan Name&nbsp;<span className='text-danger'>*</span>
              </p>
              <RHFTextField
                size='small'
                name='name'
                label=''
                placeholder='Enter plan name'
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <p className='text-left text-white mb-1'>
                Select Plan Type&nbsp;<span className='text-danger'>*</span>
              </p>
              <RHFSelect
                size='small'
                name='plan_type'
                options={[
                  { label: 'Bronze', value: 'bronze' },
                  { label: 'Silver', value: 'silver' },
                  { label: 'Gold', value: 'gold' },
                  { label: 'Blaze', value: 'blaze' },
                ]}
              />
            </Grid>
            <Grid item md={12}>
              <p className='text-left text-white mb-1'>
                Description&nbsp;<span className='text-danger'>*</span>
              </p>
              <Controller
                name='description'
                render={({ field }) => (
                  <RichTextEditor
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </Grid>
            <Grid item md={6}>
              <p className='text-left text-white mb-1'>
                Rate (Amount)&nbsp;<span className='text-danger'>*</span>
              </p>
              <RHFTextField
                size='small'
                name='rate'
                label=''
                placeholder='Rate (Amount)'
              />
            </Grid>
            <Grid item md={6}>
              <p className='text-left text-white mb-1'>
                Total Amount&nbsp;<span className='text-danger'>*</span>
              </p>
              <RHFTextField
                size='small'
                name='total_amount'
                label=''
                placeholder='Total Amount'
              />
            </Grid>
            <Grid item md={6}>
              <p className='text-left text-white mb-1'>
                Select Plan Validity&nbsp;
                <span className='text-danger'>*</span>
              </p>
              <RHFSelect
                size='small'
                name='plan_validity'
                options={[
                  { label: 'Yearly', value: 'Yearly' },
                  { label: 'Half Quarter', value: 'Half-Quarter' },
                  { label: 'Monthly', value: 'Monthly' },
                  { label: 'Weekly', value: 'Weekly' },
                ]}
              />
            </Grid>
            <Grid item md={6}>
              <p className='text-left text-white mb-1'>
                Plan Status&nbsp;<span className='text-danger'>*</span>
              </p>
              <RHFSelect
                size='small'
                name='plan_status'
                options={[
                  { label: 'Normal', value: 'normal' },
                  { label: 'Popular', value: 'popular' },
                ]}
              />
            </Grid>
            {/* <Grid item md={6}>
              <p className='text-left text-white mb-1'>
                Student Count&nbsp;<span className='text-danger'>*</span>
              </p>
              <RHFTextField
                size='small'
                name='student_count'
                label=''
                placeholder='Student Count'
              />
            </Grid>
            <Grid item md={6}>
              <p className='text-left text-white mb-1'>
                Organization&nbsp;<span className='text-danger'>*</span>
              </p>
              <RHFTextField
                size='small'
                name='organization_count'
                label=''
                placeholder='Organization'
              />
            </Grid>
            <Grid item md={6}>
              <p className='text-left text-white mb-1'>
                Admin&nbsp;<span className='text-danger'>*</span>
              </p>
              <RHFTextField
                size='small'
                name='admin_count'
                label=''
                placeholder='Admin'
              />
            </Grid>
            <Grid item md={6}>
              <p className='text-left text-white mb-1'>
                Staff&nbsp;<span className='text-danger'>*</span>
              </p>
              <RHFTextField
                size='small'
                name='staff_count'
                label=''
                placeholder='Staff'
              />
            </Grid> */}
          </Grid>
        </div>
        <div className='flex justify-end'>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={isSubmitting}
            sx={{ mt: 3, background: 'white', color: colors.black }}
          >
            Add Plan
          </Button>
        </div>
      </FormProvider>
    </div>
  );
};

export default ManagePlanForm;
