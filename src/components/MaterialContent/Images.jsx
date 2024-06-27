import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Icon } from '@iconify/react';
import MrDropzone from './tools/MrDropzone';
import HeadSection from './tools/HeadSection';
import MaterialContentHelper from './utils/common';
import AddVideoCard from './tools/AddVideoCard/AddVideoCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#F6B336',
}));

const Images = ({ imagesFile, setImagesFile }) => {
  console.log('🚀 ~ Images ~ imagesFile:', imagesFile);
  const theme = useTheme();
  const imageHelper = MaterialContentHelper();

  const addImage = () => {
    setImagesFile(prevFiles => [
      ...prevFiles,
      ...imageHelper.generateVideoCard(1), // Adjust as per your helper function
    ]);
  };

  const handleImageChange = (index, file) => {
    console.log('🚀 ~ handleImageChange ~ file:', file);
    const updatedFiles = [...imagesFile];
    console.log('🚀 ~ handleImageChange ~ updatedFiles:', updatedFiles);
    updatedFiles[index] = {
      ...updatedFiles[index],
      src: URL.createObjectURL(file),
      files: file,
    };
    setImagesFile(updatedFiles);
  };

  const handleRemoveImage = index => {
    const updatedFiles = [...imagesFile];
    updatedFiles.splice(index, 1);
    setImagesFile(updatedFiles);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeadSection title={'Images'} />
      <Grid container spacing={2}>
        {imagesFile?.map((imageItem, idx) => (
          <Grid item xs={6} md={4} key={idx}>
            <Item>
              <MrDropzone
                files={imageItem} // Pass the individual file object to MrDropzone
                onDrop={acceptedFiles =>
                  handleImageChange(idx, acceptedFiles[0])
                }
                onRemoveThumbnail={() => handleRemoveImage(idx)}
                imgIcon={
                  <Icon
                    icon='grommet-icons:document-upload'
                    fontSize={30}
                    style={{ marginBottom: '20px' }}
                  />
                }
                uploadMetadata={{
                  title: 'Upload Image',
                  mimeType: ['.png', '.jpg', '.jpeg', '.gif'],
                  description: 'Max File Size 2 MB',
                }}
              />
            </Item>
          </Grid>
        ))}
        <Grid item xs={6} md={4}>
          <Item>
            <AddVideoCard title='Add Image' onSubmit={addImage} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Images;
