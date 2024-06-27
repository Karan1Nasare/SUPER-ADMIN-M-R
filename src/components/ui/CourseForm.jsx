import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Grid,
  styled,
} from '@mui/material';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';

import RichTextEditor from '../shared/RichTextEditor';
import TextField from '../shared/input/TextField';
import { RHFTextField } from '../../hooks/hook-form';

const UploadBoxContainer = styled(Box)(({ theme }) => ({
  width: 150,
  height: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '80%',
    height: '80%',
    border: '2px dashed #fff',
    borderRadius: '50%',
  },
}));
const CourseForm = () => {
  return (
    <Paper elevation={3} className=' bg-[#0B1739] p-4 text-white'>
      <Grid
        className='flex justify-between border border-[#343B4F] bg-[#0B1739] p-8 rounded-xl'
        container
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={2}
          className=' border  h-[200px] rounded-[20px] flex justify-center items-center'
        >
          <UploadBoxContainer>
            <IconButton>
              <UploadFileIcon fontSize='large' style={{ color: '#fff' }} />
            </IconButton>
          </UploadBoxContainer>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={10} className=''>
          <Box className='w-full pl-[30px]'>
            <RHFTextField
              size='small'
              name='CourseName'
              label='Course Name [STD]'
              placeholder='Enter Course Name'
              id='form-props-full-width'
              InputLabelProps={{ shrink: true }}
              fullWidth
              required
            />
          </Box>
          <Box className='w-full pl-[30px]'>
            <Typography
              variant='body1'
              className='text-left'
              color='#ffffff'
              mb={1}
            >
              Description*
            </Typography>
            <RichTextEditor />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CourseForm;
