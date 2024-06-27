import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import FileUpload from '../../../../assets/file-upload.svg';
import AddFeatureDetails from '../../../shared/AddFeatureDetails';
import UploadImage from '../../../shared/uploadImage/uploadImage';
import DeleteStudent from '../../../dashboard/student/components/deleteStudent';
import useFeatures from '../../hooks/useFeatures';
import AnouncementImage from '../../../../assets/announcement_card.png';

const AddFeatureCard = () => {
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const { AddFeature } = useFeatures();
  const [newFeature, setNewFeature] = useState({
    title: '',
    gst: '',
    description: '',
    rate: '',
    totalAmount: '',
    image: AnouncementImage,
  });

  const onFeatureChange = (name, value) => {
    setNewFeature(prevFeature => ({
      ...prevFeature,
      [name]: value,
    }));

    console.log('new feature', newFeature);
  };

  const handleAddFeature = () => {
    AddFeature(newFeature);
  };

  const handleOpenDeleteDialog = () => {
    setIsOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsOpenDeleteDialog(false);
  };
  return (
    <div>
      <Typography className='flex align-items-start' variant='mainLayoutTitle'>
        Features
      </Typography>
      <UploadImage />
      <AddFeatureDetails
        feature={newFeature}
        onFeatureChange={onFeatureChange}
      />
      <div className='flex justify-end mt-6 '>
        <Button
          variant='contained'
          className='bg-white text-black'
          sx={{
            backgroundColor: 'white',
            color: 'black',
          }}
          onClick={handleAddFeature}
        >
          Add Plan
        </Button>
        <DeleteStudent isOpen={isOpenDeleteDialog} />
      </div>
    </div>
  );
};

export default AddFeatureCard;
