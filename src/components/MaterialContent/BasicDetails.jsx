/* eslint-disable import/no-cycle */
import React, { useCallback, useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  TextField,
  FormControl,
  Paper,
  Grid,
  Container,
  Typography,
  Divider,
} from '@mui/material';
import { RiImageAddLine } from 'react-icons/ri';
import { useNavigate, useNavigation } from 'react-router-dom';
import MrDropzone from './tools/MrDropzone';
import MrCKEditor from './tools/CKeditor/MrCKEditor';
import colors from '../../theme/colors';
import HeadSection from './tools/HeadSection';
import UploadVideo from '../shared/UploadVideo/index';
import MaterialDropDown from '../Material/Filters/MaterialDropDown';
import RichTextEditor from '../shared/RichTextEditor';
import { getRouteByName } from '../../App.routes';
import MaterialDropDown2 from '../Material/Filters/MaterialDropDown2';

const BasicDetailsContainer = styled(Box)(({ theme }) => ({
  overflowY: 'auto',
  maxHeight: '80vh', // Adjust this value as needed
  padding: theme.spacing(2),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#F6B336',
}));

// const HeadSection = () => (
//   <div className='relative flex flex-col items-start gap-3 w-full'>
//     <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
//     <h6 className='text-3xl font-bold dark:text-orange ml-2'>Thumbnail</h6>
//     <Typography variant='addCourseSubtitle' className='!mb-5'>
//       Select or upload a picture that shows what's in your video. A good
//       thumbnail stands out and draws viewers' attention.
//     </Typography>
//   </div>
// );

function BasicDetails({
  submitRef,
  files,
  setFiles,
  isUpload,
  setUpload,
  title,
  setTitle,
  setVideoUpload,
  isVideoUpload,
  setFilters,
  setDescription,
  description,
  setThumbnailImage,
  setThumbnailVideo,
  filters,
  thumbnailVideo,
}) {
  const navigate = useNavigate();

  console.log('filters========>', filters);
  const onDropThumbnail1 = useCallback(
    acceptedFiles => {
      // Handle the files
      const filesTemp = [...files];
      filesTemp[0] = {
        file: acceptedFiles[0],
        src: URL.createObjectURL(acceptedFiles[0]),
      };
      setFiles(filesTemp);
      setThumbnailImage(filesTemp[0]);
      setUpload(true);
    },
    [files],
  );

  const onDropThumbnail2 = useCallback(
    acceptedFiles => {
      // Handle the files
      const filesTemp = [...files];
      filesTemp[1] = {
        file: acceptedFiles[0],
        src: URL.createObjectURL(acceptedFiles[0]),
      };
      setFiles(filesTemp);
      setThumbnailVideo(filesTemp[1]);
      setVideoUpload(true);
    },
    [files],
  );

  const onRemoveThumbnail1 = () => {
    const filesTemp = [...files];
    filesTemp[0] = { file: {}, src: '' };
    setFiles(filesTemp);
  };

  const onRemoveThumbnail2 = () => {
    const filesTemp = [...files];
    filesTemp[1] = { file: {}, src: '' };
    setFiles(filesTemp);
  };

  const onChange = e => {
    setTitle(e.target.value);
    // console.log('value', e.target.value);
  };

  return (
    <BasicDetailsContainer>
      <FormControl fullWidth>
        {/* Thumbnail Section */}
        <HeadSection
          title={'Thumbnail'}
          details={
            "Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention."
          }
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <MrDropzone
                  onDrop={onDropThumbnail1}
                  files={files?.[0]}
                  onRemoveThumbnail={onRemoveThumbnail1}
                  imgIcon={
                    <RiImageAddLine
                      size={40}
                      style={{ marginBottom: '20px' }}
                    />
                  }
                  uploadMetadata={{
                    title: 'Upload Thumbnail',
                    mimeType: ['.pdf'],
                    description: 'Max File Size 50 MB',
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <UploadVideo
                  onDrop={onDropThumbnail2}
                  isUpload={isVideoUpload}
                  thumbnailVideo={thumbnailVideo}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Divider
          sx={{
            background: theme => theme.color.border_color,
            marginTop: '10px',
          }}
        />
        <Grid container mt={2}>
          <Grid item xs={12}>
            <span className='flex items-start my-2'>
              Select Course & Subject & Chapter
            </span>
            <MaterialDropDown2
              setApplyFilter={setFilters}
              hideInput={true}
              selectedFilters={filters}
            />
          </Grid>
          <Grid item xs={12}>
            <Item>
              <p className='text-white text-left'>
                Title <span className='text-red-600'>*</span>
              </p>
              <TextField
                className='w-4/12'
                variant='outlined'
                placeholder='Enter title'
                name='title'
                value={title}
                onChange={onChange}
                fullWidth
                InputProps={{
                  sx: {
                    height: '2.5rem !important',
                    background: colors.secondary__fill__dark,
                    border: 'none',
                    borderRadius: '0.375rem',
                  },
                }}
              />
            </Item>
          </Grid>
        </Grid>
        <Grid container mt={2} mb={6}>
          <Grid item xs={12}>
            <Item>
              <p className='text-white text-left'>
                Description <span className='text-red-600'>*</span>
              </p>
              <RichTextEditor value={description} onChange={setDescription} />
            </Item>
          </Grid>
        </Grid>
      </FormControl>
    </BasicDetailsContainer>
  );
}

export default BasicDetails;
