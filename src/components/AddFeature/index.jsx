import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AddFeatureDetails from '../shared/AddFeatureDetails';
import UploadImage from '../shared/uploadImage/uploadImage';
import useAddFeatures from './hooks/useAddFeature';
import back from '../Icon/back.svg';

const AddFeatureCard = () => {
  const navigate = useNavigate();
  const methods = useForm();

  const { AddFeature } = useAddFeatures();
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = async data => {
    // Create a new FormData object
    const formData = new FormData();

    // Append form fields to the FormData object using Object.entries
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    console.log(selectedFile);
    // Append the selected file if it exists
    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    try {
      // Use the AddFeature method to handle the form submission
      const featureAdded = await AddFeature(formData);
      console.log('Feature added:', featureAdded);
    } catch (error) {
      console.error('Error adding feature:', error);
    }
  };
  const handleBackClick = () => {
    navigate('/features');
  };
  return (
    <div>
      {/* <div className='flex justify-end'>
        <div onClick={handleBackClick} className='flex mr-1 '>
          <img src={back} alt='' className='text-white w-8 h-8 mr-1' />
          <button className='text-white text-2xl'>Back</button>
        </div>
      </div> */}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className='flex justify-between'>
            <Typography
              className='flex align-items-start'
              variant='mainLayoutTitle'
            >
              Features
            </Typography>
            <div onClick={handleBackClick} className='flex mr-1 '>
              <img src={back} alt='' className='text-white mt-4 w-8 h-8 mr-1' />
              <button className='text-white text-2xl'>Back</button>
            </div>
          </div>
          <UploadImage
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
          <AddFeatureDetails />
          <div className='flex justify-end mt-6 '>
            <Button
              type='submit'
              variant='contained'
              className='bg-white text-black hover:text-white'
              sx={{
                backgroundColor: 'white',
                color: 'black',
                fontSize: '1rem',
                fontWeight: '400',
              }}
            >
              Add Feature
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddFeatureCard;
