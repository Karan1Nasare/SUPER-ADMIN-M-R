import React, { useState, useEffect } from 'react';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Icon } from '@iconify/react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import AnnouncementImage from '../../../../assets/announcement_card.png';
import RichTextEditor from '../../RichTextEditor';
import { RHFSelect, RHFTextField } from '../../../../hooks/hook-form';

const EditPlan = ({ open, handleClose, data, updateHandler }) => {
  console.log('🚀 ~ EditPlan ~ data:', data);
  if (!open) {
    return null;
  }

  const [bgImage, setBgImage] = useState(AnnouncementImage);
  const methods = useForm({
    defaultValues: {
      _method: 'PUT',
      name: data?.title || '',
      plan_type: data?.plan_type || '',
      rate: data?.rate || '',
      total_amount: data?.total_amount || '',
      plan_validity: data?.plan_validity || '',
      plan_status: data?.plan_status || '',
      description: data?.description || '',
    },
  });

  const { handleSubmit, setValue } = methods;

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBgImage(reader.result); // Update background image state with selected image
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = values => {
    console.log('🚀 ~ onSubmit ~ values:', values);
    updateHandler(values);
  };

  return (
    <FormProvider {...methods}>
      <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-70 text-start'>
        <div className='flex flex-col px-8 py-7 rounded-3xl border border-gray-700 border-solid text-start bg-secondary__fill w-[700px] h-auto max-w-full max-lg:w-[600px] max-lg:h-[500px] max-md:w-[500px] max-md:h-[300px] max-sm:w-[400px] max-sm:h-[300px] max-md:px-5'>
          <div className='flex gap-5 text-xl text-white max-md:flex-wrap max-md:max-w-full'>
            <div className='flex-auto my-auto '>Edit Plan</div>
            <IconButton
              aria-label='close'
              onClick={handleClose}
              sx={{
                color: 'white',
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className='shrink-0 items-center h-px border border-solid bg-slate-500 border-slate-500 max-md:max-w-full' />
          <div className='flex overflow-hidden relative rounded flex-col justify-center items-center px-20 pt-11 pb-20 mt-11 text-base text-center text-white whitespace-nowrap min-h-[158px] max-md:px-5 max-md:mt-10 max-md:max-w-full'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <img
                loading='lazy'
                src={bgImage}
                className='object-cover w-full h-full opacity-50'
              />
            </div>

            <div className='relative z-10 flex flex-col items-center justify-center'>
              <label htmlFor='fileInput' className='cursor-pointer'>
                <Icon
                  icon={'uil:image-upload'}
                  className='text-white text-xl mb-1'
                />
                <input
                  id='fileInput'
                  type='file'
                  hidden
                  onChange={handleFileChange}
                />
              </label>
              <span
                className='text-white text-lg cursor-pointer'
                onClick={() => document.getElementById('fileInput').click()}
              >
                Change
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-wrap gap-5 content-start mt-5 text-sm '>
              <div className='flex flex-col flex-1'>
                <div className='mb-2'>
                  <Typography variant='h6' className='text-white'>
                    Plan Name
                  </Typography>
                </div>
                <RHFTextField
                  placeholder='Enter Name'
                  type='text'
                  fullWidth
                  name='name'
                  required
                />
              </div>
              <div className='flex flex-col flex-1 '>
                <div className='mb-2'>
                  <Typography variant='h6' className='text-white '>
                    Select Plan Type
                  </Typography>
                </div>
                <div className='rounded-md h-full w-full '>
                  <RHFSelect
                    name='plan_type'
                    options={[
                      { label: 'Bronze', value: 'bronze' },
                      { label: 'Silver', value: 'silver' },
                      { label: 'Gold', value: 'gold' },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className='mt-5'>
                <Typography variant='h6' className='text-sm text-white'>
                  Description
                </Typography>
              </div>
              <div className='mt-2'>
                <Controller
                  name='description'
                  render={({ field }) => (
                    <RichTextEditor
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 mt-5'>
              <div>
                <Typography variant='h6 mb-2' className='text-white'>
                  Rate (Amount)
                </Typography>
                <RHFTextField
                  placeholder='Enter Rate'
                  type='text'
                  fullWidth
                  name='rate'
                  required
                  pattern={/^[0-9]*$/}
                />
              </div>
              <div>
                <Typography variant='h6 mb-2' className='text-white'>
                  Total Amount
                </Typography>
                <RHFTextField
                  placeholder='Enter Total Amount'
                  type='text'
                  fullWidth
                  name='total_amount'
                  required
                  pattern={/^[0-9]*$/}
                />
              </div>
              <div>
                <Typography variant='h6' className='text-white '>
                  Select Plan Validity
                </Typography>
                <div className='rounded-md w-full h-2.6 mt-2'>
                  <RHFSelect
                    name='plan_validity'
                    options={[
                      { label: 'Yearly', value: 'Yearly' },
                      { label: 'Half Quarter', value: 'Half-Quarter' },
                      { label: 'Monthly', value: 'Monthly' },
                      { label: 'Weekly', value: 'Weekly' },
                    ]}
                  />
                </div>
              </div>
              <div>
                <Typography variant='h6' className='text-white '>
                  Select Plan Status
                </Typography>
                <div className='rounded-md w-full h-2.6 mt-2'>
                  <RHFSelect
                    name='plan_status'
                    options={[
                      { label: 'Normal', value: 'normal' },
                      { label: 'Popular', value: 'popular' },
                    ]}
                  />
                </div>
              </div>
            </div>
            <button
              type='submit'
              className='justify-center self-center px-7 py-3 mt-8 text-base text-center whitespace-nowrap bg-white rounded-lg text-slate-900 max-md:px-5'
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default EditPlan;
