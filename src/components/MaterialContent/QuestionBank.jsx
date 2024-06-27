import React, { useState } from 'react';
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
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#F6B336',
}));

const QuestionBank = ({ questionBankFile, setQuestionBankFile }) => {
  const theme = useTheme();
  const documentHelper = MaterialContentHelper();

  // Function to add a new question bank card
  const addQuestionBankCard = () => {
    setQuestionBankFile(prevValues => [
      ...prevValues,
      ...documentHelper.generateVideoCard(1),
    ]);
  };

  // Handler for changing a question bank file
  const handleQuestionBankChange = (index, file) => {
    const updatedFiles = [...questionBankFile];
    updatedFiles[index] = {
      ...updatedFiles[index],
      src: URL.createObjectURL(file),
      files: file,
    };
    setQuestionBankFile(updatedFiles);
  };

  // Handler for removing a question bank file
  const handleRemoveQuestionBank = index => {
    const updatedFiles = [...questionBankFile];
    updatedFiles.splice(index, 1);
    setQuestionBankFile(updatedFiles);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeadSection title={'Question Bank'} />
      <Grid container spacing={2}>
        {questionBankFile?.map((documentItem, idx) => (
          <Grid item xs={6} md={4} key={idx}>
            <Item>
              <MrDropzone
                files={documentItem} // Pass the individual document object to MrDropzone
                onDrop={acceptedFiles =>
                  handleQuestionBankChange(idx, acceptedFiles[0])
                }
                onRemoveThumbnail={() => handleRemoveQuestionBank(idx)}
                imgIcon={
                  <Icon
                    icon='grommet-icons:document-upload'
                    fontSize={30}
                    style={{ marginBottom: '20px' }}
                  />
                }
                uploadMetadata={{
                  title: 'Upload Question Bank',
                  mimeType: ['.pdf'],
                  description: 'Max File Size 50 MB',
                }}
              />
            </Item>
          </Grid>
        ))}
        <Grid item xs={6} md={4}>
          <Item>
            <AddVideoCard title='Add Document' onSubmit={addQuestionBankCard} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionBank;
