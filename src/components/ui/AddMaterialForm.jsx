import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import ImageUpload from './Form/ImageUpload';
import RichTextEditor from '../shared/RichTextEditor';

function AddMaterialForm({
  inputLabel,
  placeholder,
  onSubmit,
  formRef,
  setFile,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = data => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
      <main className='flex flex-col justify-center p-8 rounded-xl border border-gray-700 border-solid bg-[#0B1739] max-md:px-5'>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ImageUpload src={''} setFile={setFile} />
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <section className='flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col'>
                <label
                  htmlFor='subjectInput'
                  className='text-sm text-white max-md:max-w-full text-left'
                >
                  {inputLabel}
                  <span className='text-red-600'>*</span>
                </label>
                <Controller
                  name='name'
                  control={control}
                  defaultValue=''
                  rules={{ required: `${inputLabel} is required` }}
                  render={({ field }) => (
                    <input
                      {...field}
                      id='subjectInput'
                      type='text'
                      placeholder={placeholder}
                      className='justify-center items-start bg-[#0B1739] px-3 py-3 mt-2 text-sm leading-5 rounded border border-[#343B4F] border-solid text-stone-300 max-md:pr-5 max-md:max-w-full'
                      aria-label='Enter Subject Name'
                    />
                  )}
                />
                {errors.name && (
                  <p className='text-red-600'>{errors.name.message}</p>
                )}
              </div>

              <p className='mt-8 text-sm max-md:max-w-full text-left text-white'>
                Description<span className='text-red-600'>*</span>
              </p>
              <Controller
                name='description'
                control={control}
                defaultValue=''
                rules={{ required: 'Description is required' }}
                render={({ field }) => (
                  <RichTextEditor
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.description && (
                <p className='text-red-600'>{errors.description.message}</p>
              )}
            </section>
          </Grid>
        </Grid>
      </main>
    </form>
  );
}

export default AddMaterialForm;
