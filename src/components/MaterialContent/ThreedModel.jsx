import React, { useState } from 'react';
import { Box, styled } from '@mui/system';
import { Grid, Paper } from '@mui/material';
import { Icon } from '@iconify/react';
import MrDropzone from './tools/MrDropzone';
import HeadSection from './tools/HeadSection';
import AddVideoCard from './tools/AddVideoCard/AddVideoCard';
import MaterialContentHelper from './utils/common';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#F6B336',
}));

const ThreedModel = ({ threeDModel, setThreeDModel }) => {
  const documentHelper = MaterialContentHelper();

  // Function to add a new 3D model card
  const addThreeDModelCard = () => {
    setThreeDModel(prevValues => [
      ...prevValues,
      ...documentHelper.generateVideoCard(1),
    ]);
  };

  // Handler for changing a 3D model file
  const handleThreeDModelChange = (index, file) => {
    const updatedFiles = [...threeDModel];
    updatedFiles[index] = {
      ...updatedFiles[index],
      src: URL.createObjectURL(file),
      files: file,
    };
    setThreeDModel(updatedFiles);
  };

  // Handler for removing a 3D model file
  const handleRemoveThreeDModel = index => {
    const updatedFiles = [...threeDModel];
    updatedFiles.splice(index, 1);
    setThreeDModel(updatedFiles);
  };

  return (
    <div>
      <HeadSection title='3D Model' />
      <Grid container spacing={2}>
        {threeDModel?.map((documentItem, idx) => (
          <Grid item xs={6} md={4} key={idx}>
            <Item>
              <MrDropzone
                files={documentItem} // Pass the individual document object to MrDropzone
                onDrop={acceptedFiles =>
                  handleThreeDModelChange(idx, acceptedFiles[0])
                }
                onRemoveThumbnail={() => handleRemoveThreeDModel(idx)}
                imgIcon={
                  <Icon
                    icon='grommet-icons:document-upload'
                    fontSize={30}
                    style={{ marginBottom: '20px' }}
                  />
                }
                uploadMetadata={{
                  title: 'Upload 3D Model',
                  mimeType: ['.pdf'],
                  description: 'Max File Size 50 MB',
                }}
              />
            </Item>
          </Grid>
        ))}
        <Grid item xs={6} md={4}>
          <Item>
            <AddVideoCard title='Add Document' onSubmit={addThreeDModelCard} />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default ThreedModel;
