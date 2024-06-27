import { TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import usePlan from '../../Plan/hooks/usePlan'; // Update the import path if necessary
import RichTextEditor from '../../shared/RichTextEditor';
import Dropdown from '../../shared/DropDown';
import { FormProvider, RHFSelect } from '../../../hooks/hook-form';

const AddPlanForm = () => {
  const { addPlan, loading, error } = usePlan();
  const [formValues, setFormValues] = useState({
    standard: '',
    planName: '',
    description: '',
    rateAmount: '',
    totalAmount: '',
    planValidity: 'Select Plan Validity',
    planStatus: 'Select Plan Status',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleDropdownChange = (name, value) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAddPlan = async () => {
    try {
      await addPlan(formValues);
      // Optionally, handle success (e.g., show a success message, reset form)
    } catch (err) {
      // Optionally, handle error (e.g., show an error message)
    }
  };

  const planValidityOptions = ['Yearly', 'Half Quarter', 'Monthly', 'Weekly'];
  const planStatusOptions = ['Popular', 'Normal'];
  const [selectPlanStatus, setSelectPlanStatus] = useState('Select Plan Type');
  const methods = useForm();
  return (
    <FormProvider methods={methods}>
      <div className='bg-secondary__fill h-full w-34 mt-4 p-8 rounded-lg'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col items-start'>
            <div className='mb-3'>
              <Typography variant='h6' className='text-white'>
                Standard
              </Typography>
            </div>
            <TextField
              placeholder='Enter Standard'
              type='text'
              fullWidth
              sx={{
                borderColor: '#343B4F',
              }}
            />
          </div>
          <div className='flex flex-col items-start'>
            <div className='mb-3'>
              <Typography variant='h6' className='text-white'>
                Plan Name
              </Typography>
            </div>
            <TextField placeholder='Enter Plan name' type='text' fullWidth />
          </div>
        </div>
        <div className='flex flex-col mt-10 '>
          <div className='mb-3 text-start'>
            <Typography variant='h6' className='text-white'>
              Description<span className='text-red-500'>*</span>
            </Typography>
          </div>
          <RichTextEditor />
        </div>
        <div className='grid grid-cols-2 gap-4 mt-10'>
          <div className='flex flex-col items-start'>
            <div className='mb-3'>
              <Typography variant='h6' className='text-white'>
                Rate (Amount)
              </Typography>
            </div>
            <TextField placeholder='Enter Rate' type='text' fullWidth />
          </div>

          <div className='flex flex-col items-start '>
            <div className='mb-3'>
              <Typography variant='h6' className='text-white'>
                Total Amount
              </Typography>
            </div>
            <TextField
              variant='outlined'
              placeholder='Enter Total Amount'
              type='text'
              fullWidth
            />
          </div>
          <div className='flex flex-col items-start mt-3'>
            <div className='mb-3'>
              <Typography variant='h6' className='text-white'>
                Select Plan Validity
              </Typography>
            </div>
            <div className='border  rounded-md  text-white border-gray-700 border-solid bg-secondary__fill h-full w-full '>
              {/* <Dropdown
                className='h-full w-full'
                options={planValidityOptions}
                selectedOption={selectPlanValidityOption}
                setSelectedOption={setSelectPlanValidityOption}
              /> */}
              <RHFSelect
                options={planValidityOptions}
                name='planValidity'
                label='Plan Validity'
                native
                placeholder='Select Plan Validity'
              />
            </div>
          </div>
          <div className='flex flex-col items-start mt-3'>
            <div className='mb-3'>
              <Typography variant='h6' className='text-white'>
                Plan Status
              </Typography>
            </div>
            <div className='border  rounded-md  text-white border-gray-700 border-solid bg-secondary__fill h-full w-full '>
              <Dropdown
                className='h-full w-full'
                options={planStatusOptions}
                selectedOption={selectPlanStatus}
                setSelectedOption={setSelectPlanStatus}
              />
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default AddPlanForm;
