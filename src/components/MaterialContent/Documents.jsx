import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';
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

const Documents = ({ documentFile, setDocumentFile }) => {
  const documentHelper = MaterialContentHelper();

  // Function to add a new document card
  const addDocumentCard = () => {
    setDocumentFile(prevFiles => [
      ...prevFiles,
      ...documentHelper.generateVideoCard(1), // Adjust as needed
    ]);
  };

  // Handler for changing a document file
  const handleDocumentChange = (index, file) => {
    console.log('🚀 ~ handleDocumentChange ~ file:', file);
    const updatedFiles = [...documentFile];
    updatedFiles[index] = {
      ...updatedFiles[index],
      src: URL.createObjectURL(file),
      files: file,
    };
    setDocumentFile(updatedFiles);
  };

  // Handler for removing a document
  const handleRemoveDocument = index => {
    const updatedFiles = [...documentFile];
    updatedFiles.splice(index, 1);
    setDocumentFile(updatedFiles);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeadSection title='Documents' />
      <Grid container spacing={2}>
        {documentFile?.map((documentItem, idx) => (
          <Grid item xs={6} md={4} key={idx}>
            <Item>
              <MrDropzone
                files={documentItem} // Pass the individual document object to MrDropzone
                onDrop={acceptedFiles =>
                  handleDocumentChange(idx, acceptedFiles[0])
                }
                onRemoveThumbnail={() => handleRemoveDocument(idx)}
                imgIcon={
                  <Icon
                    icon='grommet-icons:document-upload'
                    fontSize={30}
                    style={{ marginBottom: '20px' }}
                  />
                }
                uploadMetadata={{
                  title: 'Upload Document',
                  mimeType: ['.pdf'],
                  description: 'Max File Size 15 MB',
                }}
              />
            </Item>
          </Grid>
        ))}
        <Grid item xs={6} md={4}>
          <Item>
            <AddVideoCard title='Add Document' onSubmit={addDocumentCard} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Documents;
